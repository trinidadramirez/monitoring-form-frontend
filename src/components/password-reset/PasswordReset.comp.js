import React from "react";
import PropTypes from "prop-types";
import "../../App.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, switchForm, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="txt-primary">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
            <Button className="login-btn" type="submit">
              Email New Password
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="login-btn">
            <a href="#!" onClick={() => switchForm("login")}>Back to login</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  switchForm: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
