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

        try {
            // In development, the backend is likely on port 5000
            // Ensure you have a proxy set up in vite.config.js or use full URL
            const response = await axios.post('/api/contact', formData);
            if (response.data.success) {
                setStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            }
        } catch (error) {
            console.error(error);
            setStatus({ type: 'danger', message: 'Failed to send message. Please try again later.' });
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
