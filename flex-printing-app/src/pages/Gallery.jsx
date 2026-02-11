import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Placeholder images - in real app use actual functionality
    const images = [
        { id: 1, title: "Shop Board", color: "#FFCDD2" },
        { id: 2, title: "Large Hoarding", color: "#F8BBD0" },
        { id: 3, title: "Visiting Cards", color: "#E1BEE7" },
        { id: 4, title: "Vinyl Sticker", color: "#D1C4E9" },
        { id: 5, title: "Glow Sign", color: "#C5CAE9" },
        { id: 6, title: "Event Banner", color: "#BBDEFB" },
    ];

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-5"
        >
            <Container>
                <div className="text-center mb-5">
                    <h1 className="fw-bold display-4">Our Portfolio</h1>
                    <p className="lead text-secondary">A glimpse of our recent work</p>
                </div>

                <Row className="g-4">
                    {images.map((img, index) => (
                        <Col key={img.id} md={4} sm={6}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                onClick={() => handleShow(img)}
                                className="cursor-pointer shadow-sm rounded-3 overflow-hidden"
                                style={{ height: '250px', background: img.color, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <h4 className="text-white text-shadow">{img.title}</h4>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body className="p-0 bg-transparent border-0">
                    {selectedImage && (
                        <div style={{ background: selectedImage.color, height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                            <h2 className="text-white">{selectedImage.title}</h2>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </motion.div>
    );
};

export default Gallery;
