import { Card, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromMedicinesArray,
  resetMedicinesArray,
} from "../../redux/slices/cartSliseReducer";
import cardsData from "../cardsData/cardsData";

const CartCards = () => {
  const dispatch = useDispatch();
  const cartMedicinesArray = useSelector((state) => state.cart.medicinesArray);

  // Фильтруем данные о карточках, оставляем только те, которые есть в корзине
  const cartCardsData = cardsData.filter((card) =>
    cartMedicinesArray.includes(card.title)
  );

  const cardButtonOnClick = (title) => {
    // console.log(title)
    dispatch(removeFromMedicinesArray(title));
  };

  return (
    <div className="my-2 p-2 pt-3 border border-primary-subtle rounded-2">
      <div>
        <Form>
          <Row xs={2} md={4} className="g-3 mb-2">
            {cartCardsData.map((card, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={card.imageUrl} />
                  <Card.Body>
                    <div className="p-2 d-flex align-items-center justify-content-between flex-wrap">
                      <Card.Title>{card.title}</Card.Title>
                      <div className="w-50">
                        <Form.Control
                          type="number"
                          id="inputPassword5"
                          defaultValue={1}
                        />
                      </div>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        cardButtonOnClick(card.title);
                      }}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="0939998877" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
          </Row>
          <Button className="mb-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(resetMedicinesArray());
          }}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};
export default CartCards;
