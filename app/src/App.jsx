import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/headerNavbar/HeaderNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./components/store/Store";
import Home from "./components/home/Home";
import CartCards from "./components/cartCards/CartCards";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
            <header>
              <HeaderNavbar />
            </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart_Cards" element={<CartCards />} />
            {/* <main className="my-2">
              <Store />
            </main>
            <footer></footer> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
