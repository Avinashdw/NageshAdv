import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Placeholder images - in real app use actual functionality
    const images = [
        { id: 1, title: "Shop Board", url: "https://i.pinimg.com/736x/24/b6/f8/24b6f8f891f56ce9e36f841ce74a8258.jpg" },
        { id: 2, title: "Large Hoarding", url: "https://i.pinimg.com/736x/80/a7/a0/80a7a0b4b6dedf2928cd8f7f61f6e13e.jpg" },
        { id: 3, title: "Visiting Cards", url: "https://i.pinimg.com/736x/d1/75/8d/d1758d1d96db4e9a71d7bb56472629ee.jpg" },
        { id: 4, title: "Vinyl Sticker", url: "https://i.pinimg.com/736x/87/6e/2b/876e2b257f7abf08b05ad553699be241.jpg" },
        { id: 5, title: "Glow Sign", url: "https://i.pinimg.com/736x/47/34/29/47342986ab477b01b146994405e1ecba.jpg" },
        { id: 6, title: "Event Banner", url: "https://i.pinimg.com/736x/04/9e/58/049e58922d43a616da138c79c276b6e1.jpg" },
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
                                className="cursor-pointer shadow-sm rounded-3 overflow-hidden position-relative"
                                style={{ height: '250px' }}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-100 h-100 object-fit-cover transition-scale"
                                />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 opacity-0 hover-opacity-100 transition-opacity">
                                    <h4 className="text-white fw-bold">{img.title}</h4>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body className="p-0 overflow-hidden">
                    {selectedImage && (
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="w-100 rounded-2"
                            style={{ maxHeight: '80vh', objectFit: 'contain' }}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </motion.div >
    );
};

export default Gallery;
