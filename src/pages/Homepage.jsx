import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Invoices from "../components/Invoice/Invoices";

const Homepage = () => {
  return (
    <Container>
      <Header />
      <Invoices />
    </Container>
  );
};

export default Homepage;
