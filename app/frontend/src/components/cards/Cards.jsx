import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import cardsData from "../cardsData/cardsData";
import { useDispatch } from "react-redux";
import { addToMedicinesArray } from "../../redux/slices/cartSliseReducer";
import { useEffect, useState } from "react";
const Cards = () => {
  
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("/api/cardsData")
      .then((response) => response.json())
      .then((data) => setCardsData(data))
      .catch((error) => console.error("Error fetching cards data:", error));
  }, []);
    const dispatch = useDispatch()

    const cardButtonOnClick = (title)=> {
        // console.log(title)
        dispatch(addToMedicinesArray(title))
    }
    return (
   

    <Row xs={1} md={2} lg={3} className="g-3">
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imageUrl}/>
            <Card.Body >
              <Card.Title>{card.title}</Card.Title>
              <Button variant="primary" onClick={()=>{cardButtonOnClick(card.title)}}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
  </Row>
    )
}
export default Cards