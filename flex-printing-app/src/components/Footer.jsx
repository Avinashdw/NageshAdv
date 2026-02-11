import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <Container>
                <Row className="gy-4">
                    <Col md={4} className="text-center text-md-start">
                        <h4 className="text-uppercase fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Nagesh Advertising</h4>
                        <p className="text-secondary">
                            Your one-stop solution for active and vibrant advertising materials.
                            We deliver high-quality flex prints, glow signs, and more.
                        </p>
                    </Col>

                    <Col md={4} className="text-center text-md-start">
                        <h5 className="mb-4 text-white">Quick Contact</h5>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                                <FaMapMarkerAlt className="text-primary-custom" /> Waghmare Complex, Akhada Balapur
                            </li>
                            <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                                <FaPhone className="text-primary-custom" /> +91 7218406303
                            </li>
                            <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                                <FaEnvelope className="text-primary-custom" /> nageshwaghmare2018@gmail.com
                            </li>
                        </ul>
                    </Col>

                    <Col md={4} className="text-center text-md-start">
                        <h5 className="mb-4 text-white">Opening Hours</h5>
                        <p className="text-secondary">Mon - Sat: 9:00 AM - 8:00 PM</p>
                        <p className="text-secondary">Sunday: Closed</p>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                            <a href="https://www.facebook.com/Nageshwaghmare" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook size={24} className="text-secondary hover-primary cursor-pointer" />
                            </a>

                            <a href="https://www.instagram.com/Nageshwaghmare" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={24} className="text-secondary hover-primary cursor-pointer" />
                            </a>

                            <a href="https://wa.me/917218406303?text=Thank%20you%20for%20contacting%20Nagesh%20Advertising%2C%0AHow%20can%20I%20help%20you" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp size={24} className="text-secondary hover-primary cursor-pointer" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr className="border-secondary my-4" />
                <div className="text-center text-secondary">
                    <p className="mb-0 small">&copy; {new Date().getFullYear()} Nagesh Advertising. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
