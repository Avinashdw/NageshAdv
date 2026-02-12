import { Container, Row, Col, Badge } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import { FaPrint, FaLightbulb, FaLayerGroup, FaImage, FaScroll, FaIdCard, FaTshirt, FaMugHot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Flex Printing",
            description: "High-quality flex banners for hoardings, events, and shop branding. We use premium material like Star Flex and Blackout Flex for long-lasting outdoor durability.",
            icon: <FaPrint />,
            link: "/contact"
        },
        {
            title: "Glow Sign Boards",
            description: "LED and non-LED glow sign boards to make your business visible day and night. Custom shapes using Acrylic letters and ACP sheets.",
            icon: <FaLightbulb />,
            link: "/contact"
        },
        {
            title: "Vinyl Printing",
            description: "Premium vinyl prints for glass doors, cars, and wall branding. One way vision (mesh) and clear vinyl options available for storefronts.",
            icon: <FaLayerGroup />,
            link: "/contact"
        },
        {
            title: "Graphic Design",
            description: "Creative logo design, social media posts, visiting cards, pamphlets, and brochure designing by our team of expert graphic designers.",
            icon: <FaImage />,
            link: "/contact"
        },
        {
            title: "Posters & Flyers",
            description: "Bulk printing for posters, pamphlets, and flyers for election campaigns, grand openings, or business promotions with quick delivery.",
            icon: <FaScroll />,
            link: "/contact"
        },
        {
            title: "Visiting Cards",
            description: "Premium visiting cards with matte, gloss, velvet, and gold-foil finishes. Standard and die-cut shapes available.",
            icon: <FaIdCard />,
            link: "/contact"
        },
        {
            title: "T-Shirt Printing",
            description: "Custom t-shirt printing for corporate events, sports teams, or gifts. Sublimation and vinyl transfer options.",
            icon: <FaTshirt />,
            link: "/contact"
        },
        {
            title: "Mug & Gift Printing",
            description: "Personalized mugs, keychains, and corporate gifts with your company logo or custom photos.",
            icon: <FaMugHot />,
            link: "/contact"
        }
    ];

    const pricing = [
        { service: "Flex Printing", price: "Starts @ ₹10 / sq.ft" },
        { service: "Vinyl Printing", price: "Starts @ ₹45 / sq.ft" },
        { service: "Visiting Cards", price: "₹300 for 100 cards" },
        { service: "Glow Sign Board", price: "Custom Quote" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-5"
        >
            <Container>
                <div className="text-center mb-5">
                    <h6 className="text-primary fw-bold text-uppercase ls-2">Our Capabilities</h6>
                    <h1 className="fw-bold display-4">Full-Service Printing</h1>
                    <p className="lead text-secondary">From concept to creation, we handle all your advertising needs.</p>
                </div>

                <Row className="g-4 mb-5">
                    {services.map((service, index) => (
                        <Col key={index} lg={3} md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Rental Services Section */}
                <div className="mb-5">
                    <Row className="justify-content-center mb-4">
                        <Col lg={8} className="text-center">
                            <h2 className="fw-bold display-6">Rental Services</h2>
                            <p className="lead text-secondary">We provide premium advertising structures on rent for maximum visibility.</p>
                        </Col>
                    </Row>
                    <Row className="g-5 align-items-center mb-5">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden rounded-4 shadow-lg"
                            >
                                <img
                                    src="https://i.pinimg.com/736x/c7/1d/5e/c71d5e5d955eb925707cfff20afb5b46.jpg"
                                    alt="Flex Frames on Rent"
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{ height: '350px' }}
                                />
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="ps-lg-4"
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-primary text-white p-3 rounded-circle me-3">
                                        <FaLayerGroup size={24} />
                                    </div>
                                    <h3 className="fw-bold mb-0">Flex Frames on Rent</h3>
                                </div>
                                <p className="text-secondary mb-4 fs-5">
                                    Sturdy and durable iron frames available for rent. Perfect for exhibitions, roadshows, and temporary hoardings.
                                    We handle transportation, installation, and dismantling.
                                </p>
                                <ul className="list-unstyled text-secondary mb-4">
                                    <li className="mb-2">✅ Available in various standard sizes</li>
                                    <li className="mb-2">✅ Weather-resistant structure</li>
                                    <li className="mb-2">✅ Quick setup and removal</li>
                                </ul>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="g-5 align-items-center flex-lg-row-reverse mb-5">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden rounded-4 shadow-lg"
                            >
                                <img
                                    src="https://i.pinimg.com/736x/23/8a/08/238a08010544763573f30a92cd9e0668.jpg"
                                    alt="Large Hoardings on Rent"
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{ height: '350px' }}
                                />
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="pe-lg-4"
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-primary text-white p-3 rounded-circle me-3">
                                        <FaImage size={24} />
                                    </div>
                                    <h3 className="fw-bold mb-0">Large Hoardings on Rent</h3>
                                </div>
                                <p className="text-secondary mb-4 fs-5">
                                    Prime location hoardings available for high-impact brand visibility.
                                    Secure your spot in high-traffic areas to maximize your reach.
                                </p>
                                <ul className="list-unstyled text-secondary mb-4">
                                    <li className="mb-2">✅ Strategic high-traffic locations</li>
                                    <li className="mb-2">✅ Large format for maximum visibility</li>
                                    <li className="mb-2">✅ Flexible rental duration</li>
                                </ul>
                            </motion.div>
                        </Col>
                    </Row>
                </div>

                {/* Pricing Section */}
                <Row className="justify-content-center mt-5">
                    <Col lg={8}>
                        <div className="bg-light p-5 rounded-4 shadow-sm text-center">
                            <h2 className="fw-bold mb-4">Starting Prices</h2>
                            <p className="text-secondary mb-4">Transparent pricing for our most popular services.</p>

                            <Row className="g-3 justify-content-center">
                                {pricing.map((p, i) => (
                                    <Col md={6} key={i}>
                                        <div className="bg-white p-3 rounded-3 shadow-sm d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">{p.service}</span>
                                            <Badge bg="primary" pill className="px-3 py-2 fs-6">{p.price}</Badge>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <p className="text-muted mt-4 small">* Prices may vary based on quantity and material quality.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Services;
