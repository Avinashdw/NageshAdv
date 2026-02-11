import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, link }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="h-100 border-0 shadow-sm card-hoverable">
                <Card.Body className="p-4 d-flex flex-column align-items-center text-center">
                    <div className="mb-4 p-3 rounded-circle bg-light text-primary d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', fontSize: '2rem', transition: 'all 0.3s ease' }}>
                        {icon}
                    </div>
                    <Card.Title className="fw-bold fs-4 mb-3">{title}</Card.Title>
                    <Card.Text className="text-secondary mb-4 flex-grow-1">
                        {description}
                    </Card.Text>
                    <Button as={Link} to={link} variant="outline-primary" className="btn-primary-custom rounded-pill px-4 d-inline-flex align-items-center gap-2">
                        Learn More <FaArrowRight size={14} />
                    </Button>
                </Card.Body>
            </Card>
        </motion.div>
    );
};

export default ServiceCard;
