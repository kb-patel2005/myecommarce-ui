import React from 'react'
import { Link, useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Typewriter from "typewriter-effect";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


export default function FrontPage() {
  return (
    <div className="frontpage">
      {/* Hero Section */}
      <Container fluid className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">
          Discover Amazing{" "}
          <span className="text-warning">
            <Typewriter
              options={{
                strings: ["Fashion", "Clothes", "Electronics", "Accessories"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="lead mt-3">
          Shop the latest trends and unbeatable deals, all in one place.
        </p>
        <Link to="/frontpage" style={{ textDecoration: "none" }}>
          <Button variant="light" size="lg" className="mt-3">
            Explore Products
          </Button>
        </Link>
      </Container>

      {/* Featured Categories */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title>Fashion</Card.Title>
                <Card.Text>Trendy outfits for every occasion.</Card.Text>
                <Button variant="primary">Shop Fashion</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title>Electronics</Card.Title>
                <Card.Text>Latest gadgets at the best prices.</Card.Text>
                <Button variant="primary">Shop Electronics</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <Card.Title>Accessories</Card.Title>
                <Card.Text>Complete your look with style.</Card.Text>
                <Button variant="primary">Shop Accessories</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  )
}
