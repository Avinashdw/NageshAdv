import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', formData);

            if (response.data.success) {
                // Store token in localStorage
                localStorage.setItem('adminToken', response.data.token);
                // Redirect to dashboard
                navigate('/admin/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={5}>
                        <Card className="shadow-lg border-0 rounded-4">
                            <Card.Body className="p-5">
                                <div className="text-center mb-4">
                                    <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                        <FaShieldAlt size={40} />
                                    </div>
                                    <h2 className="fw-bold">Admin Login</h2>
                                    <p className="text-secondary">Nagesh Advertising Dashboard</p>
                                </div>

                                {error && <Alert variant="danger">{error}</Alert>}

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label className="fw-semibold">
                                            <FaUser className="me-2" />
                                            Username
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            placeholder="Enter username"
                                            required
                                            className="py-2"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="password">
                                        <Form.Label className="fw-semibold">
                                            <FaLock className="me-2" />
                                            Password
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter password"
                                            required
                                            className="py-2"
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 py-2 fw-semibold"
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login to Dashboard'}
                                    </Button>
                                </Form>

                                <div className="text-center mt-4">
                                    <small className="text-secondary">
                                        Protected area for authorized personnel only
                                    </small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default AdminLogin;
