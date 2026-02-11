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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Static approach: Redirect to WhatsApp with pre-filled message
            const whatsappMessage = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'Not provided'}%0A*Requirement:* ${formData.message}`;
            const whatsappURL = `https://wa.me/917218406303?text=${whatsappMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappURL, '_blank');

            setStatus({ type: 'success', message: 'Opening WhatsApp to send your enquiry. Thank you!' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'danger', message: 'Something went wrong. Please try again or call us directly.' });
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
