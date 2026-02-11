import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUserTie, FaCheckCircle, FaAward, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-5"
        >
            {/* Header Section */}
            <section className="pb-5">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col lg={6}>
                            <motion.div
                                initial={{ x: -50 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h6 className="text-primary fw-bold text-uppercase ls-2">About Us</h6>
                                <h1 className="fw-bold display-4 mb-4">We Make Your Brand Look Good</h1>
                                <p className="lead text-secondary mb-4">
                                    Established in 2020, Nagesh Advertising has been the leading provider of high-quality printing and advertising solutions in the region. We started with a small shop and have grown into a full-service printing partner for hundreds of local businesses.
                                </p>
                                <p className="text-secondary">
                                    We believe in quality, affordability, and timeliness. Our state-of-the-art printing machines ensure vibrant colors and sharp details for all your branding needs. From small business cards to massive hoardings, we handle it all with precision.
                                </p>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <div className="bg-white p-2 rounded-4 shadow-sm">
                                <div
                                    style={{
                                        height: '400px',
                                        backgroundImage: "url('https://i.pinimg.com/736x/94/0a/85/940a85c8811019fe2ab32b4461946f44.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission & Vision */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-start border-5 border-primary">
                                <h3 className="fw-bold mb-3">Our Mission</h3>
                                <p className="text-secondary lead">
                                    To provide affordable, high-quality printing solutions that help local businesses grow and stand out in the competitive market.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-start border-5 border-success">
                                <h3 className="fw-bold mb-3">Our Vision</h3>
                                <p className="text-secondary lead">
                                    To become the most trusted and innovative printing partner in the city, known for our speed, quality, and customer satisfaction.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-5">
                <Container>
                    <Row className="text-center bg-dark text-white rounded-4 py-5 shadow-lg">
                        <Col md={3} className="mb-4 mb-md-0 border-end-md border-secondary">
                            <FaUserTie className="fs-1 text-primary mb-3" />
                            <h2 className="fw-bold display-5">500+</h2>
                            <p className="text-white-50">Happy Clients</p>
                        </Col>
                        <Col md={3} className="mb-4 mb-md-0 border-end-md border-secondary">
                            <FaCheckCircle className="fs-1 text-primary mb-3" />
                            <h2 className="fw-bold display-5">1000+</h2>
                            <p className="text-white-50">Projects Completed</p>
                        </Col>
                        <Col md={3} className="mb-4 mb-md-0 border-end-md border-secondary">
                            <FaAward className="fs-1 text-primary mb-3" />
                            <h2 className="fw-bold display-5">3</h2>
                            <p className="text-white-50">Design Awards</p>
                        </Col>
                        <Col md={3}>
                            <FaCalendarAlt className="fs-1 text-primary mb-3" />
                            <h2 className="fw-bold display-5">5+</h2>
                            <p className="text-white-50">Years Experience</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h6 className="text-primary fw-bold text-uppercase ls-2">Meet The Team</h6>
                        <h2 className="fw-bold display-5">Our Expert Team</h2>
                    </div>
                    <Row className="g-4 justify-content-center">
                        {[1, 2, 3].map((item) => (
                            <Col md={4} key={item}>
                                <Card className="border-0 shadow-sm text-center">
                                    <div className="bg-secondary mb-3 rounded-top" style={{ height: '250px' }}></div>
                                    <Card.Body>
                                        <h5 className="fw-bold">Team Member Name</h5>
                                        <p className="text-primary mb-0">Senior Designer</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </motion.div>
    );
};

export default About;
