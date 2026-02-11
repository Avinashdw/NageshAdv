import { useState } from 'react';
import { Form, Button, Alert, Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Prepare WhatsApp message (will be used regardless of API success)
        const whatsappMessage = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'Not provided'}%0A*Requirement:* ${formData.message}`;
        const whatsappURL = `https://wa.me/917218406303?text=${whatsappMessage}`;

        try {
            // 1. Send Email via Web3Forms API
            // Replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual key from web3forms.com
            const web3formsKey = 'YOUR_WEB3FORMS_ACCESS_KEY';

            if (web3formsKey && web3formsKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
                const emailData = {
                    access_key: web3formsKey,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `New Enquiry from ${formData.name}`,
                    from_name: 'Nagesh Advertising Website'
                };
                await axios.post('https://api.web3forms.com/submit', emailData);
            }

            // 2. Notify user and redirect
            setStatus({ type: 'success', message: 'Enquiry received! Redirecting to WhatsApp for quick chat...' });

            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setStatus({ type: '', message: '' });
            }, 1500);

        } catch (error) {
            console.error('Email API Error:', error);
            // Even if email fails, we still want to redirect to WhatsApp so the user doesn't lose the lead
            setStatus({ type: 'warning', message: 'Email notification failed, but you can still contact us via WhatsApp.' });

            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 2000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded-4 shadow-sm">
            <h3 className="fw-bold mb-4">Send Us A Message</h3>
            {status.message && <Alert variant={status.type}>{status.message}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="+91 9876543210"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message / Requirement</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="I need a flex banner for my shop..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 btn-primary-custom" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : <><FaPaperPlane className="me-2" /> Send Enquiry</>}
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
