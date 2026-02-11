import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-section position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, #FF8A65 100%)', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
            {/* Abstract Shapes/Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: '#fff' }}
            />

            <Container className="position-relative z-1">
                <Row className="align-items-center">
                    <Col lg={7} md={12} className="text-center text-lg-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h5 className="text-light fw-bold text-uppercase mb-3 letter-spacing-2">Premium Printing Services</h5>
                            <h1 className="display-3 fw-bold text-white mb-4">
                                Bring Your <span style={{ color: 'var(--accent-color)' }}>Brand</span> To Life
                            </h1>
                            <p className="lead text-white-50 mb-5 mx-auto mx-lg-0" style={{ maxWidth: '600px' }}>
                                We specialize in high-quality Flex Printing, Glow Sign Boards, Vinyl Printing, and comprehensive Advertising Solutions tailored for your business growth.
                            </p>

                            <div className="d-flex gap-3">
                                <Button as={Link} to="/contact" variant="light" size="lg" className="rounded-pill px-5 fw-bold shadow-lg text-primary">
                                    Get A Quote
                                </Button>
                                <Button as={Link} to="/portfolio" variant="outline-light" size="lg" className="rounded-pill px-5 fw-bold">
                                    View Work
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={5} md={12} className="d-none d-lg-block">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="position-relative"
                        >
                            {/* Placeholder for Hero Image - In real app use actual image */}
                            <div className="glass-panel p-4 text-center text-white">
                                <div
                                    style={{
                                        height: '300px',
                                        backgroundImage: `url("https://i.pinimg.com/736x/8d/29/bc/8d29bc45ea22f953cc4ab82d741ab71f.jpg")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >

                                </div>
                                <div className="mt-3">
                                    <p className="mb-0 fw-bold">Fast Delivery</p>
                                    <small>Within 24 Hours</small>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
