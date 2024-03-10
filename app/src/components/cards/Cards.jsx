import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Cards = () => {
    const cardButtonOnClick = ()=> {
        
    }
    const cardsData = [
        {
          title: 'Voltaren',
          imageUrl: 'https://cdn.shop-apotheke.com/images/D11/240/397/D11240397-p1.jpg',
        },
        {
          title: 'Aspirin',
          imageUrl: 'https://apozona.com/wp-content/uploads/2020/10/aspirin-pro-500-mg-film-coated-tablets-20.jpg',
        },
        {
          title: 'Eucerin',
          imageUrl: 'https://root.tblcdn.com/img/goods/936298f6-d603-11e9-ba99-000c29ab36d9/1/img_0.jpg?v=AAAAAAk99QQ',
        },
        {
          title: 'Bepanthen',
          imageUrl: 'https://www.kreo.com.ua/image/cache/catalog/bepanthen/bepanthen-duo-100g-polski%281%29-800x800.jpg',
        },
      ];
    return (
   

    <Row xs={1} md={2} lg={3} className="g-3">
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imageUrl}/>
            <Card.Body >
              <Card.Title>{card.title}</Card.Title>
              <Button variant="primary" onClick={()=>{cardButtonOnClick}}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
  </Row>
    )
}
export default Cards