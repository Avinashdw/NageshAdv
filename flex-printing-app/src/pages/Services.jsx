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
