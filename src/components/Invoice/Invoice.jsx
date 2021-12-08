import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Invoice = ({ invoice }) => {
  let date =
    invoice?.due.toString().split(" ")[0] +
    " " +
    invoice?.due.toString().split(" ")[1] +
    " " +
    invoice?.due.toString().split(" ")[2];

  return (
    <Card className="my-4">
      <Card.Body>
        <Row className="d-flex align-items-center">
          <Col className="d-flex justify-content-center fs-5 fw-bold">
            #{invoice.id.slice(0, 5)}
          </Col>
          <Col className="d-flex justify-content-center">{date}</Col>
          <Col className="d-flex justify-content-center">
            {invoice.clientName}
          </Col>
          <Col className="d-flex justify-content-center fs-5 fw-bold">
            ${invoice.total}
          </Col>
          <Col className="d-flex justify-content-center">{invoice.status}</Col>
          <Col className="d-flex justify-content-center">
            <Button variant="warning">
              <Link to={`/invoices/${invoice.id}`}>See detail</Link>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Invoice;
