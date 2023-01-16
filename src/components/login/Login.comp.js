import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>SD Monitoring Login</h1>
          <hr />
          <Form>
            <Form.Group>
              <div className="text-start mt-3 text-secondary">
                <Form.Label>Email Address</Form.Label>
              </div>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group>
              <div className="text-start mt-3 text-secondary">
                <Form.Label>Password</Form.Label>
              </div>
              <Form.Control type="password" name="password" required />
            </Form.Group>
            <Button className="login-btn" type="submit">Log In</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
