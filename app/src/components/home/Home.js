import { Container, Image } from "react-bootstrap"

const Home = () => {
    return (
<div className="my-2 p-2 border border-primary-subtle rounded-2 ">
<Container>
   <h1 className="my-4 d-flex justify-content-center align-items-center">
   Wellcome to Medicine Delivery app
   </h1>
   {/* <Image src="/src/icons/doctor_white_coat.svg/100px250" fluid /> */}
   <Image className='w-100' src="https://gov-web-sing.s3.ap-southeast-1.amazonaws.com/uploads/2023/1/Wordpress-featured-images-48-1672795987342.jpg" rounded fluid />
</Container>
</div>
    )
}

export default Home