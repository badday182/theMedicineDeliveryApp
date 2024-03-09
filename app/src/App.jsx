import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/headerNavbar/HeaderNavbar";
import SideNavSection from "./components/sideNavSection/SideNavSection";
function App() {
  return (
    <>
      <Container>
        <header>
          <HeaderNavbar />
        </header>
        <main className="my-2">
          <SideNavSection />
        </main>
        <footer></footer>
      </Container>
    </>
  );
}

export default App;
