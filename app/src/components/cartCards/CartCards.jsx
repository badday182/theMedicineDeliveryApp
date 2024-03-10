import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import cardsData from "../cardsData/cardsData";
import { useSelector } from "react-redux";

const CartCards = () => {
  const cartMedicinesArray = useSelector(
    (state) => state.cart.medicinesArray
  )

  console.log(cartMedicinesArray);

    // const cardButtonOnClick = (title)=> {

    // }
       return (
   
<div className="my-2 p-2 border border-primary-subtle rounded-2">

    <Row xs={2} md={4} className="g-3">
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imageUrl}/>
            <Card.Body >
              <Card.Title>{card.title}</Card.Title>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
  </Row>
</div>
    )
}
export default CartCards