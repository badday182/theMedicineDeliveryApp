// import { Card, Form } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import cardsData from "../cardsData/cardsData";
// import { useDispatch, useSelector } from "react-redux";
// import { resetMedicinesArray } from "../../redux/slices/cartSliseReducer";

// const CartCards = () => {
//   const dispatch = useDispatch();

//   const cartMedicinesArray = useSelector((state) => state.cart.medicinesArray);

//   // console.log(cartMedicinesArray);

//   return (
//     <div className="my-2 p-2 border border-primary-subtle rounded-2">
//       <Row xs={2} md={4} className="g-3 mb-2">
//         {cardsData.map((card, idx) => (
//           <Col key={idx}>
//             <Card>
//               <Card.Img variant="top" src={card.imageUrl} />
//               <Card.Body>
//                 <div className="p-2 d-flex align-items-center justify-content-between flex-wrap">
//                   <Card.Title>{card.title}</Card.Title>
//                   <div className="w-50">
//                     <Form.Control
//                       type="number"
//                       id="inputPassword5"
//                     />
//                   </div>
//                 </div>
//                 <Button variant="danger">Remove</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Button
//         variant="danger"
//         onClick={() => {
//           dispatch(resetMedicinesArray());
//         }}
//       >
//         Clear Cart
//       </Button>
//     </div>
//   );
// };
// export default CartCards;

import { Card, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { resetMedicinesArray } from "../../redux/slices/cartSliseReducer";
import cardsData from "../cardsData/cardsData";

const CartCards = () => {
  const dispatch = useDispatch();
  const cartMedicinesArray = useSelector((state) => state.cart.medicinesArray);

  // Фильтруем данные о карточках, оставляем только те, которые есть в корзине
  const cartCardsData = cardsData.filter((card) =>
    cartMedicinesArray.includes(card.title)
  );

  return (
    <div className="my-2 p-2 border border-primary-subtle rounded-2">
      <Row xs={2} md={4} className="g-3 mb-2">
        {cartCardsData.map((card, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <div className="p-2 d-flex align-items-center justify-content-between flex-wrap">
                  <Card.Title>{card.title}</Card.Title>
                  <div className="w-50">
                    <Form.Control type="number" id="inputPassword5" defaultValue={1}/>
                  </div>
                </div>
                <Button variant="danger" >Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        variant="danger"
        onClick={() => {
          dispatch(resetMedicinesArray());
        }}
      >
        Clear Cart
      </Button>
    </div>
  );
};
export default CartCards;
