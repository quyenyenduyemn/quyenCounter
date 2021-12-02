import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router";
const Home = () => {
  let history = useHistory();
  return (
    <div className="block">
      <Container>
        <Row>
          <div>
            <Col className="text-center">
              <h1 className="title">Counter app</h1>
            </Col>
          </div>
        </Row>

        <Row>
          <Col md={4} />
          <Col md={4} className="j">
            <Button
              className="button1"
              onClick={() => history.push("/counter")}
            >
              Show Alert
            </Button>
          </Col>
          <Col md={4} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
