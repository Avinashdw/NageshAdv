import { Container, Row, Col, Accordion } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaQuestionCircle, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-5 bg-light"
        >
            <Container>
                <div className="text-center mb-5">
                    <h6 className="text-primary fw-bold text-uppercase ls-2">Get In Touch</h6>
                    <h1 className="fw-bold display-4">Contact Us</h1>
                    <p className="lead text-secondary">We are here to help you with all your printing needs</p>
                </div>

                <Row className="gy-5">
                    <Col lg={5}>
                        <div className="pe-lg-4">
                            <h3 className="fw-bold mb-4">Contact Information</h3>
                            <p className="text-secondary mb-4">
                                Visit our shop or contact us via phone/email for quick quotes and queries.
                            </p>

                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1">Our Location</h5>
                                    <p className="text-secondary mb-0">Waghmare Complex, Akhada Balapur,<br />Hingoli Maharashtra</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <FaPhone size={20} />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1">Phone Number</h5>
                                    <p className="text-secondary mb-0">+91 7218406303</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <FaEnvelope size={20} />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1">Email Address</h5>
                                    <p className="text-secondary mb-0">nageshwaghmare2018@gmail.com</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <FaClock size={20} />
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1">Working Hours</h5>
                                    <p className="text-secondary mb-0">Mon - Sat: 9:00 AM - 9:00 PM</p>
                                    <p className="text-secondary mb-0">Sunday: Call before visiting</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h5 className="fw-bold mb-3">Follow Us</h5>
                                <div className="d-flex gap-3">
                                    <a href="https://www.facebook.com/Nageshwaghmare" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }} aria-label="Facebook">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/Nageshwaghmare" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }} aria-label="Instagram">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="https://wa.me/917218406303?text=Thank%20you%20for%20contacting%20Nagesh%20Advertising%2C%0AHow%20can%20I%20help%20you" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }} aria-label="WhatsApp">
                                        <FaWhatsapp size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <ContactForm />
                    </Col>
                </Row>

                {/* FAQ Section */}
                <Row className="mt-5 pt-5">
                    <Col lg={8} className="mx-auto">
                        <div className="text-center mb-4">
                            <h3 className="fw-bold"><FaQuestionCircle className="text-primary me-2" /> Frequently Asked Questions</h3>
                        </div>
                        <Accordion defaultActiveKey="0" className="shadow-sm rounded-3 overflow-hidden">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are your standard delivery times?</Accordion.Header>
                                <Accordion.Body>
                                    For urgent flex printing orders, we can deliver within 2-4 hours. Standard orders for banners, visiting cards, and flyers usually take 24 hours. Glow sign boards may take 3-5 days depending on the size and complexity.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you provide installation services?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we provide on-site installation for glow sign boards, hoardings, and large vinyl prints. Installation charges may apply based on location and height.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Can I submit my own design file?</Accordion.Header>
                                <Accordion.Body>
                                    Absolutely! You can email us your design in CDR, AI, PSD, or PDF format. Ensure the resolution is at least 300 DPI for best print quality.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Do you offer bulk discounts?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we offer attractive discounts for bulk orders on visiting cards, pamphlets, and election campaign materials. Contact us for a custom quote.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                {/* Google Map Embed */}
                <Row className="mt-5">
                    <Col>
                        <div className="rounded-4 overflow-hidden shadow-sm map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.299229049033!2d77.41615259999999!3d19.528762900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1b9004f486203%3A0x43377159c2815022!2sNagesh%20waghmare%20Advertising%20%26%20printing!5e0!3m2!1sen!2sin!4v1770813678071!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Nagesh Advertising Location - Hingoli Maharashtra"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Contact;
