import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DrugCard() {
  return (
    <div>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://vinmec-prod.s3.amazonaws.com/images/20220507_064340_925937_analgin.max-1800x1800.jpg" />
      <Card.Body>
        <Card.Title>Analgin</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shop-apotheke.com%2Farzneimittel%2F11240397%2Fvoltaren-schmerzgel-forte-2-32-gel-mit-diclofenac.htm&psig=AOvVaw3xVw-tq7lIJdaq7BIeRUXH&ust=1710148666412000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwif0buvrumEAxUrQvEDHVMqCoEQjRx6BAgAEBY" />
      <Card.Body>
        <Card.Title>Analgin</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default DrugCard;