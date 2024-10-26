import { Col, Container, Row, Card, Button } from "react-bootstrap";

function App() {
  return (
    <Container>
      {/* Header */}
      <Row>
        <Col>Header content</Col>
      </Row>

      {/* Main */}
      <Row>
        <Col md={2}>Left main</Col>
        <Col md={10}>
          <Container fluid>
            <Row>
              <Col>Right title</Col>
            </Row>
            <Row>
              <Col sm={4} md={3}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      {/*  */}
    </Container>
  );
}

export default App;
