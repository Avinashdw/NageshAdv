import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} expand="lg" className="bg-white shadow-sm sticky-top" style={{ padding: '15px 0' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand-custom fw-bold fs-3 text-uppercase" style={{ color: 'var(--primary-color)' }} onClick={() => setExpanded(false)}>
                    Nagesh<span className="text-dark">Advertising</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} className="border-0 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/" className="nav-link-custom fw-semibold mx-2 text-dark" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link-custom fw-semibold mx-2 text-dark" onClick={() => setExpanded(false)}>About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="nav-link-custom fw-semibold mx-2 text-dark" onClick={() => setExpanded(false)}>Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery" className="nav-link-custom fw-semibold mx-2 text-dark" onClick={() => setExpanded(false)}>Gallery</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link-custom fw-semibold mx-2 text-dark" onClick={() => setExpanded(false)}>Contact</Nav.Link>

                        <div className="d-flex flex-column flex-lg-row gap-3 mt-3 mt-lg-0 ms-lg-3 w-100 w-lg-auto">
                            <motion.div whileHover={{ scale: 1.05 }} className="w-100 w-lg-auto">
                                <Button href="tel:+917218406303" variant="outline-dark" className="rounded-pill px-4 fw-bold d-flex align-items-center justify-content-center gap-2 w-100">
                                    <FaPhoneAlt /> Call Now
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="w-100 w-lg-auto">
                                <Button href="https://wa.me/917218406303?text=Thank%20you%20for%20contacting%20Nagesh%20Advertising%2C%0AHow%20can%20I%20help%20you" variant="success" className="btn-whatsapp rounded-pill px-4 fw-bold w-100 justify-content-center">
                                    <FaWhatsapp size={20} /> Chat
                                </Button>
                            </motion.div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
