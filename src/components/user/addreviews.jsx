import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Addreviews = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button className="mt-3" variant="outline-danger" size='sm'>Add</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Addreviews;
