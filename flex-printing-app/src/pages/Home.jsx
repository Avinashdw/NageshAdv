import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { FaPrint, FaLightbulb, FaLayerGroup, FaImage, FaCheckCircle, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        {
            title: "Flex Printing",
            description: "High-quality flex banners for hoardings, events, and shop branding with vivid colors.",
            icon: <FaPrint />,
            link: "/services"
        },
        {
            title: "Glow Sign Boards",
            description: "LED and non-LED glow sign boards to make your business visible day and night.",
            icon: <FaLightbulb />,
            link: "/services"
        },
        {
            title: "Vinyl Printing",
            description: "Premium vinyl prints for glass doors, cars, and wall branding.",
            icon: <FaLayerGroup />,
            link: "/services"
        },
        {
            title: "Graphic Design",
            description: "Creative logo design, visiting cards, pamphlets, and brochure designing.",
            icon: <FaImage />,
            link: "/services"
        }
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            business: "RK Electronics",
            text: "Excellent service! I got my shop board designed and installed within 3 days. The quality is top-notch and pricing is very reasonable.",
            rating: 5
        },
        {
            name: "Anita Sharma",
            business: "Boutique Owner",
            text: "The vinyl branding for my boutique's glass front looks amazing. Very professional team and the design suggestions were great.",
            rating: 5
        },
        {
            name: "Suresh Reddy",
            business: "Event Organizer",
            text: "I regularly order flex banners for my events. They always deliver on time even with tight deadlines. Highly recommended!",
            rating: 4
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />

            {/* Services Section */}
            <section className="section-padding bg-white">
                <Container>
                    <div className="text-center mb-5">
                        <h6 className="text-primary fw-bold text-uppercase ls-2">What We Do</h6>
                        <h2 className="fw-bold display-5">Our Popular Services</h2>
                    </div>

                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col key={index} lg={3} md={6}>
                                <ServiceCard {...service} />
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center mt-5">
                        <Button as={Link} to="/services" variant="primary" size="lg" className="btn-primary-custom px-5">
                            View All Services
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Work Process Section */}
            <section className="section-padding bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h6 className="text-primary fw-bold text-uppercase ls-2">How It Works</h6>
                        <h2 className="fw-bold display-5">Our Simple Process</h2>
                    </div>
                    <Row className="g-4 text-center">
                        <Col md={3}>
                            <div className="position-relative">
                                <div className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                    <span className="display-4 fw-bold text-primary">1</span>
                                </div>
                                <h4 className="fw-bold">Consultation</h4>
                                <p className="text-secondary">Discuss your requirements and get a free quote.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="position-relative">
                                <div className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                    <span className="display-4 fw-bold text-primary">2</span>
                                </div>
                                <h4 className="fw-bold">Design</h4>
                                <p className="text-secondary">Our designers create the perfect layout for you.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="position-relative">
                                <div className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                    <span className="display-4 fw-bold text-primary">3</span>
                                </div>
                                <h4 className="fw-bold">Printing</h4>
                                <p className="text-secondary">High-quality printing using latest machines.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="position-relative">
                                <div className="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '100px', height: '100px' }}>
                                    <span className="display-4 fw-bold text-primary">4</span>
                                </div>
                                <h4 className="fw-bold">Delivery</h4>
                                <p className="text-secondary">Fast delivery or installation at your site.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="fw-bold display-5 mb-4">Why Choose Us?</h2>
                            <p className="lead text-secondary mb-4">
                                We combine quality, speed, and affordability to deliver the best printing solutions in the market.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center gap-3">
                                    <FaCheckCircle className="text-primary fs-4 flex-shrink-0" />
                                    <span className="fw-semibold fs-5">Premium Quality Materials</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-3">
                                    <FaCheckCircle className="text-primary fs-4 flex-shrink-0" />
                                    <span className="fw-semibold fs-5">Fastest Turnaround Time</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-3">
                                    <FaCheckCircle className="text-primary fs-4 flex-shrink-0" />
                                    <span className="fw-semibold fs-5">Competitive Market Pricing</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center gap-3">
                                    <FaCheckCircle className="text-primary fs-4 flex-shrink-0" />
                                    <span className="fw-semibold fs-5">Expert Installation Team</span>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6} className="mt-4 mt-lg-0">
                            <div className="bg-light p-4 rounded-4 shadow-sm">
                                <div
                                    style={{
                                        height: '350px',
                                        backgroundImage:
                                            "url('https://i.pinimg.com/736x/6f/76/ad/6f76adf3395e2e94eb92fc7e6c6fad14.jpg')",
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

            {/* Testimonials */}
            <section className="section-padding bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h6 className="text-primary fw-bold text-uppercase ls-2">Testimonials</h6>
                        <h2 className="fw-bold display-5">What Our Clients Say</h2>
                    </div>
                    <Row className="g-4">
                        {testimonials.map((t, i) => (
                            <Col md={4} key={i}>
                                <Card className="h-100 border-0 shadow-sm p-3">
                                    <Card.Body>
                                        <FaQuoteLeft className="text-primary fs-1 mb-3 opacity-25" />
                                        <Card.Text className="lead fst-italic mb-4">"{t.text}"</Card.Text>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5 className="fw-bold mb-0">{t.name}</h5>
                                                <small className="text-secondary">{t.business}</small>
                                            </div>
                                            <div className="text-warning">
                                                {[...Array(t.rating)].map((_, index) => <FaStar key={index} />)}
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-dark text-white text-center">
                <Container>
                    <h2 className="fw-bold mb-3">Ready to boost your business visibility?</h2>
                    <p className="mb-4 text-secondary">Contact us today for a free quote on our services.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <Button as={Link} to="/contact" variant="primary" size="lg" className="btn-primary-custom px-5">
                            Contact Us Now
                        </Button>
                        <Button href="tel:+917218406303" variant="outline-light" size="lg" className="rounded-pill px-5">
                            Call Us Directly
                        </Button>
                    </div>
                </Container>
            </section>
        </motion.div>
    );
};

export default Home;
