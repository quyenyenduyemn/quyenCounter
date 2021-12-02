import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { store } from "../store";
import { actionDecreate, actionIncreate } from "../Action";
import { useSelector } from "react-redux";

const Couter = () => {
  const productList = useSelector((state) => state);

  const Increase = () => {
    store.dispatch(actionIncreate());
  };
  const Decrease = () => {
    store.dispatch(actionDecreate());
  };

  return (
    <div className="block">
      <Container>
        <Row>
          <h1 className="text-center title">{productList}</h1>
        </Row>
        <Row className=" justify-content-center">
          <Col md={1} xs={6} sm={6} className="right">
            <button className="circle" onClick={Increase}>
              +
            </button>
          </Col>
          <Col md={1} xs={6} sm={6} className="left">
            <button className="circle" onClick={Decrease}>
              -
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Couter;
