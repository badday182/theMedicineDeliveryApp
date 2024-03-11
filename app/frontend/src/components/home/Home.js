import { Container, Image } from "react-bootstrap"
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
   
  
    return (
<div className="my-2 p-2 border border-primary-subtle rounded-2 ">
<Analytics/>
<Container className="text-center">
   <h1 className="my-4 ">
   Wellcome to Medicine Delivery app
   </h1>
   <Image className='w-75' src="https://gov-web-sing.s3.ap-southeast-1.amazonaws.com/uploads/2023/1/Wordpress-featured-images-48-1672795987342.jpg" rounded fluid />
</Container>
</div>
    )
}

export default Home