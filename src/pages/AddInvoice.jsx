import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewIncome } from "../features/invoice/InvoiceSlice";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";

const AddInvoice = () => {
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [note, SetNote] = useState("");
  const [due, setDue] = useState(null);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleAddItem = () => {
    if (!itemName || !qty || !price) {
      alert("please fill all the needed fields");
      return;
    }
    setItems([
      ...items,
      {
        id: uuidv4(),
        itemName,
        qty,
        price,
        itemTotal: qty * price,
      },
    ]);
    setItemName("");
    setQty("");
    setPrice("");
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.itemTotal;
    });
    return total;
  };

  console.log(due);

  const payload = {
    id: uuidv4(),
    clientName,
    clientEmail,
    note,
    status: "pending",
    due,
    items,
    total: calculateTotal(items),
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center fs-2 my-3">
        Create New Invoice
      </Row>
      <div className="fs-3 mb-3">
        <Link to="/">Take me to homeapage</Link>
      </div>

      <Row>
        <Form>
          <Row>
            <Col>
              <Form.Label className="fs-4">Client name</Form.Label>
              <Form.Control
                placeholder="John Doe"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Label className="fs-4">Client email</Form.Label>
              <Form.Control
                placeholder="email@example.com"
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Note"
              className="my-5"
            >
              <Form.Control
                as="textarea"
                placeholder="You can add a note here"
                style={{ height: "80px" }}
                value={note}
                onChange={(e) => SetNote(e.target.value)}
              />
            </FloatingLabel>
          </Row>

          <div>
            Click input and pick a due time :{" "}
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={due}
              onChange={(date) => setDue(date)}
            />
          </div>

          <h4 className="my-5">Add Items</h4>
          <Row>
            <Col xs={4}>
              <Form.Control
                placeholder="Item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Col>
            <Col xs={2}>
              <Form.Control
                placeholder="Qty"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            </Col>
            <Col xs={4}>
              <Form.Control
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </Col>
            <Col>
              <Row>
                <Col className="d-flex align-items-center">
                  Total : {qty * price}
                </Col>
                <Col>
                  <Button variant="primary" onClick={handleAddItem}>
                    Add
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>

          {items.map((item) => (
            <Row className="my-4" key={item.id}>
              <Col>{item.id}</Col>
              <Col>{item.itemName}</Col>
              <Col>{item.itemTotal}</Col>
              <Col className="d-flex justify-content-center ">
                <Button
                  variant="danger"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Row>
      <div className="mt-5 d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={() => {
            dispatch(addNewIncome(payload));
            navigate("/");
          }}
          disabled={!clientName || !clientEmail || items.length === 0 || !due}
        >
          Save Invoice
        </Button>
      </div>
    </Container>
  );
};

export default AddInvoice;
