import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BillHistory = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Row className="homepagetext">
          <Row id="rewardsbtn">
            <Col>
              <Card.Body>
                <Card.Title>Napoli 1800 Cucina & Pizzeria</Card.Title>
                <Card.Text>
                  <Row id="rewardsbtn">
                    <Col>Total: $34.76</Col>
                    <Col>On Aug 24 2020</Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row id="rewardsbtn">
            <Col>
              <Card.Body>
                <Card.Title>Tariacuri</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>Total: $34.76</Col>
                    <Col>On Aug 24 2020</Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row id="rewardsbtn">
            <Col>
              <Card.Body>
                <Card.Title>Casa Carlos Restaurant</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>Total: $34.76</Col>
                    <Col>On Aug 24 2020</Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row id="rewardsbtn">
            <Col>
              <Card.Body>
                <Card.Title>Casa Carlos Restaurant</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>Total: $34.76</Col>
                    <Col>On Aug 24 2020</Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BillHistory;
