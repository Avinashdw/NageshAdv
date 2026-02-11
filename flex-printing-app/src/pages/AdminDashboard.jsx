import { useState, useEffect } from 'react';
import { Container, Table, Button, Badge, Alert, Form, InputGroup, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSearch, FaTrash, FaEnvelope, FaPhone, FaClock, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [submissions, setSubmissions] = useState([]);
    const [filteredSubmissions, setFilteredSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    useEffect(() => {
        // Filter submissions based on search term
        if (searchTerm) {
            const filtered = submissions.filter(sub =>
                sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.phone.includes(searchTerm) ||
                sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.message.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredSubmissions(filtered);
        } else {
            setFilteredSubmissions(submissions);
        }
    }, [searchTerm, submissions]);

    const fetchSubmissions = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin/login');
                return;
            }

            const response = await axios.get('http://localhost:5000/api/admin/submissions', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.success) {
                setSubmissions(response.data.submissions);
                setFilteredSubmissions(response.data.submissions);
            }
        } catch (err) {
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('adminToken');
                navigate('/admin/login');
            } else {
                setError('Failed to load submissions');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this submission?')) {
            return;
        }

        try {
            const token = localStorage.getItem('adminToken');
            await axios.delete(`http://localhost:5000/api/admin/submissions/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Refresh submissions
            fetchSubmissions();
        } catch (err) {
            alert('Failed to delete submission');
        }
    };

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    };

    const exportToCSV = () => {
        const headers = ['Name', 'Phone', 'Email', 'Message', 'Date'];
        const rows = filteredSubmissions.map(sub => [
            sub.name,
            sub.phone,
            sub.email,
            sub.message.replace(/,/g, ';'),
            formatDate(sub.timestamp)
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    if (loading) {
        return (
            <Container className="py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </Container>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-4 bg-light min-vh-100"
        >
            <Container>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Admin Dashboard</h2>
                        <p className="text-secondary mb-0">Nagesh Advertising - Contact Submissions</p>
                    </div>
                    <Button variant="outline-danger" onClick={handleLogout}>
                        <FaSignOutAlt className="me-2" />
                        Logout
                    </Button>
                </div>

                {/* Stats Cards */}
                <Row className="mb-4">
                    <Col md={4}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-0 fw-bold">{submissions.length}</h3>
                                        <small className="text-secondary">Total Submissions</small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="bg-success text-white rounded-circle p-3 me-3">
                                        <FaUser size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-0 fw-bold">{filteredSubmissions.length}</h3>
                                        <small className="text-secondary">Filtered Results</small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="bg-info text-white rounded-circle p-3 me-3">
                                        <FaClock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-0 fw-bold">
                                            {submissions.length > 0 ? 'Today' : 'N/A'}
                                        </h3>
                                        <small className="text-secondary">Latest Activity</small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {error && <Alert variant="danger">{error}</Alert>}

                {/* Search and Export */}
                <Card className="border-0 shadow-sm mb-4">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={8}>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FaSearch />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search by name, phone, email, or message..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={4} className="text-end">
                                <Button variant="success" onClick={exportToCSV} disabled={filteredSubmissions.length === 0}>
                                    Export to CSV
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Submissions Table */}
                <Card className="border-0 shadow-sm">
                    <Card.Body className="p-0">
                        {filteredSubmissions.length === 0 ? (
                            <div className="text-center py-5">
                                <FaEnvelope size={48} className="text-secondary mb-3" />
                                <h5 className="text-secondary">No submissions found</h5>
                                <p className="text-muted">
                                    {searchTerm ? 'Try a different search term' : 'Contact form submissions will appear here'}
                                </p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <Table hover className="mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="border-0 py-3">Date & Time</th>
                                            <th className="border-0 py-3">Name</th>
                                            <th className="border-0 py-3">Contact</th>
                                            <th className="border-0 py-3">Message</th>
                                            <th className="border-0 py-3">Status</th>
                                            <th className="border-0 py-3 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSubmissions.map((submission) => (
                                            <tr key={submission.id}>
                                                <td className="align-middle">
                                                    <small className="text-secondary">
                                                        {formatDate(submission.timestamp)}
                                                    </small>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="fw-semibold">{submission.name}</div>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <FaPhone className="text-primary me-2" size={12} />
                                                        <small>{submission.phone}</small>
                                                    </div>
                                                    {submission.email && (
                                                        <div>
                                                            <FaEnvelope className="text-primary me-2" size={12} />
                                                            <small>{submission.email}</small>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="align-middle">
                                                    <small className="text-truncate d-inline-block" style={{ maxWidth: '300px' }}>
                                                        {submission.message}
                                                    </small>
                                                </td>
                                                <td className="align-middle">
                                                    <Badge bg="success">New</Badge>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() => handleDelete(submission.id)}
                                                    >
                                                        <FaTrash />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </motion.div>
    );
};

export default AdminDashboard;
