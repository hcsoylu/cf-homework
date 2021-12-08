import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStatus } from "../features/invoice/InvoiceSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const invoices = useSelector((state) => state.invoices.invoices);

  return (
    <div>
      <Row className="d-flex align-items-center my-4">
        <Col xs={6} className="fs-1">
          Invoices
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6} className="d-flex flex-row-reverse">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => dispatch(setStatus(e.target.value))}
              >
                <option value="empty">Filter by status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
              </Form.Select>
            </Col>
            <Col xs={6} className="d-flex flex-row-reverse">
              <Button variant="primary">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/add"
                >
                  New Income
                </Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="fs5">
            There are <span className="fs-4">#{invoices.length}</span> total
            invoices.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
