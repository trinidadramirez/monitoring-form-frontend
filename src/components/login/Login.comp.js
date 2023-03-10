import React from "react";
import PropTypes from "prop-types";
import "../../App.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  switchForm,
  email,
  password,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="txt-primary">SD Monitoring Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <div className="text-start mt-3 text-secondary">
                <Form.Label>Email Address</Form.Label>
              </div>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <div className="text-start mt-3 text-secondary">
                <Form.Label>Password</Form.Label>
              </div>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Button className="login-btn" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="login-btn">
            <a href="#!" onClick={() => switchForm("reset")}>
              Forgot Password?
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  switchForm: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
