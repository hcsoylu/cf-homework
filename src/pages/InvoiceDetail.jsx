import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editStatus } from "../features/invoice/InvoiceSlice";
import { Link } from "react-router-dom";

const InvoiceDetail = () => {
  let { id } = useParams();
  const [invoice, setInvoice] = useState();

  let date =
    invoice?.due.toString().split(" ")[0] +
    " " +
    invoice?.due.toString().split(" ")[1] +
    " " +
    invoice?.due.toString().split(" ")[2];

  const invoices = useSelector((state) => state.invoices.invoices);

  const dispatch = useDispatch();

  useEffect(() => {
    const invoice = invoices.find((i) => i.id === id);
    setInvoice(invoice);
  }, [id, invoices]);

  return (
    <Container className="fs-4">
      <h4 className="d-flex justify-content-center mt-5 mb-5 fs-3">
        Invoice Detail Page
      </h4>
      <Link to="/">Take me to homeapage</Link>
      <Row>
        <Col>
          <div className="mt-4">ID number : {invoice?.id}</div>
        </Col>
        <Col>
          {invoice?.status !== "paid" && (
            <Button
              className="mt-4"
              variant="primary"
              onClick={() => dispatch(editStatus(invoice.id))}
            >
              change status as paid
            </Button>
          )}
        </Col>
      </Row>
      <div className="mt-5">
        <Row>
          <Col>
            <div className="mt-2">Client Name : {invoice?.clientName}</div>
            <div className="mt-2">Client Email : {invoice?.clientEmail}</div>
          </Col>
          <Col>
            <div className="mt-2">Status : {invoice?.status}</div>
            <div className="mt-2">Date : {date}</div>{" "}
          </Col>
        </Row>
        <Row className="mt-3 border-top border-info">
          <Col>Description: {invoice?.note && invoice.note}</Col>
        </Row>
        <div>
          <h4 className="d-flex justify-content-center mt-5 mb-5 fs-5">
            Items Detail
          </h4>
          {invoice?.items.map((item) => (
            <div className="d-flex justify-content-between">
              <div>item name : {item.itemName}</div>
              <div>quantitiy : {item.qty}</div>
              <div>item price :{item.price}</div>
              <div>item total : {item.itemTotal}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 fs-1">Overall Total : {invoice?.total}</div>
      </div>
    </Container>
  );
};

export default InvoiceDetail;
