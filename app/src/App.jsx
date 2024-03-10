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
      <Container className="d-flex flex-column vh-100">
        <BrowserRouter>
          <header>
            <HeaderNavbar />
          </header>
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart_cards" element={<CartCards />} />
            </Routes>
          </main>
        </BrowserRouter>
        <footer className="mb-1 p-2 text-center border border-primary-subtle rounded-2">
          Created by Valerii Berkun
        </footer>
      </Container>
    </>
  );
}

export default App;
