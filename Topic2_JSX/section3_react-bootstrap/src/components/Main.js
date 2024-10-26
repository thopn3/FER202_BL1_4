import { Col, Container, Row, Card, Button } from "react-bootstrap";
import data from "../product-data.json";

function Main() {
    return (
        <Row id="main">
            <Col md={2}>Left main</Col>
            <Col md={10}>
                <Container fluid>
                    <Row>
                        <Col>Right title</Col>
                    </Row>
                    <Row>
                        {
                            data?.map(p => (
                                <Col sm={4} md={3} key={p?.id}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={"/assets/images/" + p?.images[0]} height={220} />
                                        <Card.Body>
                                            <Card.Title>{p?.name}</Card.Title>
                                            <Card.Text>
                                                {
                                                    p?.description.substring(0, 60)
                                                }
                                            </Card.Text>
                                            <div style={{ textAlign: "center" }}>
                                                <Card.Link href={`/details/${p?.id}`} className="btn btn-success">Details</Card.Link>
                                                <Card.Link href={`/add-cart/${p?.id}`} className="btn btn-primary">Buy now</Card.Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Main;