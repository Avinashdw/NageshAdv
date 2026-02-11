require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Database setup
const dbFile = path.join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter, { submissions: [] });

// Initialize database
async function initDB() {
    await db.read();
    db.data = db.data || { submissions: [] };
    await db.write();
}

app.use(cors());
app.use(bodyParser.json());

// Initialize Twilio client if credentials are provided
let twilioClient = null;
const OWNER_PHONE = process.env.OWNER_PHONE_NUMBER || '+917218406303';
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'nageshwaghmare2018@gmail.com';

if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
    const twilio = require('twilio');
    twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    console.log('✅ Twilio service initialized (SMS & WhatsApp)');
} else {
    console.log('⚠️  Twilio credentials not found. SMS/WhatsApp will be logged to console only.');
    console.log('📝 To enable real SMS/WhatsApp, add credentials to .env file');
}

// Initialize Email transporter
let emailTransporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    emailTransporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    console.log('✅ Email service initialized');
} else {
    console.log('⚠️  Email credentials not found. Emails will be logged to console only.');
    console.log('📝 To enable real emails, add EMAIL_USER and EMAIL_PASS to .env file');
}

// Function to send Email notification
const sendEmailNotification = async (name, phone, email, message) => {
    const emailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0;">🔔 New Contact Form Submission</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border: 1px solid #ddd;">
                <h2 style="color: #333; margin-top: 0;">Customer Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><strong>👤 Name:</strong></td>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><strong>📱 Phone:</strong></td>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><strong>📧 Email:</strong></td>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><a href="mailto:${email}">${email || 'Not provided'}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><strong>💬 Message:</strong></td>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;">${message}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;"><strong>🕒 Time:</strong></td>
                        <td style="padding: 10px; background: white; border: 1px solid #ddd;">${new Date().toLocaleString('en-IN')}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107;">
                    <strong>⚡ Action Required:</strong> Please contact the customer as soon as possible.
                </div>
            </div>
            <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
                <p style="margin: 0;">Nagesh Advertising - Admin Notification System</p>
            </div>
        </div>
    `;

    if (emailTransporter) {
        try {
            const info = await emailTransporter.sendMail({
                from: `"Nagesh Advertising" <${process.env.EMAIL_USER}>`,
                to: OWNER_EMAIL,
                subject: `🔔 New Enquiry from ${name}`,
                html: emailHTML
            });
            console.log(`✅ Email sent successfully! ID: ${info.messageId}`);
            return { success: true, method: 'EMAIL' };
        } catch (error) {
            console.error('❌ Error sending email:', error.message);
            return { success: false, method: 'EMAIL', error: error.message };
        }
    } else {
        console.log('📧 Email would be sent to:', OWNER_EMAIL);
        console.log('💡 Configure email credentials in .env to enable real emails');
        return { success: true, method: 'CONSOLE' };
    }
};

// Function to send WhatsApp notification
const sendWhatsAppNotification = async (name, phone, email, message) => {
    const whatsappBody = `🔔 *New Contact Form Submission!*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'Not provided'}\n*Message:* ${message}\n\n_Please contact the customer soon!_`;

    if (twilioClient) {
        try {
            const whatsappResponse = await twilioClient.messages.create({
                body: whatsappBody,
                from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
                to: `whatsapp:${OWNER_PHONE}`
            });
            console.log(`✅ WhatsApp sent successfully! SID: ${whatsappResponse.sid}`);
            return { success: true, method: 'WHATSAPP' };
        } catch (error) {
            console.error('❌ Error sending WhatsApp:', error.message);
            return { success: false, method: 'WHATSAPP', error: error.message };
        }
    } else {
        console.log('💬 WhatsApp would be sent to:', OWNER_PHONE);
        console.log('💡 Configure Twilio credentials in .env to enable WhatsApp');
        return { success: true, method: 'CONSOLE' };
    }
};

// Function to send SMS notification
const sendSMSNotification = async (name, phone, email, message) => {
    const smsBody = `🔔 New Contact Form Submission!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nMessage: ${message}`;

    // Log to console always
    console.log('\n==================================================');
    console.log('📧 NEW CONTACT FORM SUBMISSION');
    console.log('==================================================');
    console.log(`👤 Name: ${name}`);
    console.log(`📱 Phone: ${phone}`);
    console.log(`📧 Email: ${email || 'Not provided'}`);
    console.log(`💬 Message: ${message}`);
    console.log('==================================================\n');

    // Send actual SMS if Twilio is configured
    if (twilioClient) {
        try {
            const smsResponse = await twilioClient.messages.create({
                body: smsBody,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: OWNER_PHONE
            });
            console.log(`✅ SMS sent successfully! SID: ${smsResponse.sid}`);
            return { success: true, method: 'SMS' };
        } catch (error) {
            console.error('❌ Error sending SMS:', error.message);
            return { success: false, method: 'SMS', error: error.message };
        }
    } else {
        console.log('📝 SMS would be sent to:', OWNER_PHONE);
        console.log('💡 Configure Twilio credentials in .env to enable real SMS');
        return { success: true, method: 'CONSOLE' };
    }
};

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, error: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

// API Endpoint for Contact Form
app.post('/api/contact', async (req, res) => {
    const { name, phone, email, message } = req.body;

    // Validation
    if (!name || !phone || !message) {
        return res.status(400).json({
            success: false,
            error: 'Name, Phone, and Message are required.'
        });
    }

    try {
        // Create submission object
        const submission = {
            id: uuidv4(),
            name,
            phone,
            email: email || '',
            message,
            timestamp: new Date().toISOString(),
            status: 'new'
        };

        // Save to database
        await db.read();
        db.data.submissions.push(submission);
        await db.write();

        // Send all notifications simultaneously
        const [emailResult, whatsappResult, smsResult] = await Promise.all([
            sendEmailNotification(name, phone, email, message),
            sendWhatsAppNotification(name, phone, email, message),
            sendSMSNotification(name, phone, email, message)
        ]);

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Thank you! Your enquiry has been received. We will contact you soon.',
            notifications: {
                email: emailResult,
                whatsapp: whatsappResult,
                sms: smsResult
            }
        });
    } catch (error) {
        console.error('❌ Error processing contact form:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to process your enquiry. Please try again or call us directly.'
        });
    }
});

// Admin Login Endpoint
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, error: 'Username and password required' });
    }

    try {
        // Check credentials
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            // Generate JWT token
            const token = jwt.sign(
                { username, role: 'admin' },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            console.log(`✅ Admin login successful: ${username}`);
            return res.json({
                success: true,
                token,
                message: 'Login successful'
            });
        } else {
            console.log(`❌ Failed login attempt for username: ${username}`);
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }
    } catch (error) {
        console.error('❌ Error during login:', error);
        return res.status(500).json({
            success: false,
            error: 'Login failed'
        });
    }
});

// Get All Submissions (Protected)
app.get('/api/admin/submissions', authenticateToken, async (req, res) => {
    try {
        await db.read();
        const submissions = db.data.submissions || [];

        // Sort by timestamp (newest first)
        submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        return res.json({
            success: true,
            submissions,
            total: submissions.length
        });
    } catch (error) {
        console.error('❌ Error fetching submissions:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch submissions'
        });
    }
});

// Delete Submission (Protected)
app.delete('/api/admin/submissions/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        await db.read();

        const index = db.data.submissions.findIndex(s => s.id === id);
        if (index === -1) {
            return res.status(404).json({ success: false, error: 'Submission not found' });
        }

        db.data.submissions.splice(index, 1);
        await db.write();

        return res.json({ success: true, message: 'Submission deleted' });
    } catch (error) {
        console.error('❌ Error deleting submission:', error);
        return res.status(500).json({ success: false, error: 'Failed to delete submission' });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'running',
        service: 'Flex Printing API',
        smsEnabled: twilioClient !== null,
        ownerPhone: OWNER_PHONE,
        adminEnabled: true
    });
});

// Start server
async function startServer() {
    await initDB();
    app.listen(PORT, () => {
        console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
        console.log(`📱 Owner notification number: ${OWNER_PHONE}`);
        console.log(`📧 SMS Status: ${twilioClient ? 'ENABLED ✅' : 'DISABLED (Console only) ⚠️'}`);
        console.log(`🔐 Admin Dashboard: ENABLED ✅`);
        console.log(`👤 Admin Username: ${process.env.ADMIN_USERNAME}\n`);
    });
}

startServer();
