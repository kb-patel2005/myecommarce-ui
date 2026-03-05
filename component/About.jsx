import React from "react";
import { Container, Row, Col, Button, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router";

const About = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* About Section */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-4">About Our Shop</h2>
            <p className="lead">
              Welcome to <strong>ShopEase</strong>, your trusted e-commerce destination.
              We provide modern shopping features that make your online experience
              simple and enjoyable.
            </p>

            {/* Bullet Points */}
            <ListGroup variant="flush" className="bg-transparent text-start">
              <ListGroup.Item className="bg-transparent">🔑 Secure Login for customers</ListGroup.Item>
              <ListGroup.Item className="bg-transparent">📝 Easy Signup to create your account</ListGroup.Item>
              <ListGroup.Item className="bg-transparent">🛒 Add to Cart for quick shopping</ListGroup.Item>
              <ListGroup.Item className="bg-transparent">💳 Safe Checkout with multiple payment options</ListGroup.Item>
              <ListGroup.Item className="bg-transparent">📦 Order Tracking to monitor deliveries</ListGroup.Item>
            </ListGroup>

            <div className="mt-4">
              <Button variant="primary" size="lg" className="fw-bold">
                <Link to="/frontpage" className="text-white text-decoration-none">
                  Start Shopping
                </Link>
              </Button>
            </div>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <h3 className="fw-bold mb-4">Our Key Features</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <div style={{ fontSize: "2.5rem" }}>🛍️</div>
                <Card.Title className="fw-bold h5 mt-2">Wide Selection</Card.Title>
                <Card.Text style={{ fontSize: "1.1rem" }}>
                  Thousands of products across fashion, electronics, and home essentials.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <div style={{ fontSize: "2.5rem" }}>💲</div>
                <Card.Title className="fw-bold h5 mt-2">Affordable Pricing</Card.Title>
                <Card.Text style={{ fontSize: "1.1rem" }}>
                  Great deals and discounts without compromising quality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <div style={{ fontSize: "2.5rem" }}>🚚</div>
                <Card.Title className="fw-bold h5 mt-2">Fast Delivery</Card.Title>
                <Card.Text style={{ fontSize: "1.1rem" }}>
                  Reliable shipping ensures your orders arrive quickly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <div style={{ fontSize: "2.5rem" }}>🎧</div>
                <Card.Title className="fw-bold h5 mt-2">24/7 Support</Card.Title>
                <Card.Text style={{ fontSize: "1.1rem" }}>
                  Our customer service team is always here to help you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;