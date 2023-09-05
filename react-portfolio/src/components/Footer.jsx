import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col>Home</Col>
          <Col>GitHub</Col>
          <Col>LinkedIn</Col>
          <Col>Donatations</Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
