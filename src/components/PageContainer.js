import React from "react";
import Container from "react-bootstrap/Container";
import Table from "./Table";

export default function PageContainer() {
  return (
    <Container>
      <Table className="tableBorder"></Table>
    </Container>
  );
}
