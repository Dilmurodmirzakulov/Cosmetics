import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { Container } from "react-bootstrap";
import MakeUpCategory from "./MakeUpCategory";

function CategoryNav() {
  return (
    <Navbar expand="lg" className="category-nav position-relative d-none d-lg-block">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background: 'transparent'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between w-100 me-auto me-lg-none">
            <Nav.Link href="#" className="category-link makeup-category-link">
              makeup <Image src={require("/public/img/dropdown-ic.svg")} alt='arrow' />
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              skin care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              hair care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              fragrance
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              foot, hand & nail care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              tool & accessories
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              shave & hair removal
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              personal care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              buy nov! <Image src={require("/public/img/dropdown-ic.svg")} alt='arrow' />
            </Nav.Link>
            <MakeUpCategory className="position-absolute makeup-categories" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CategoryNav;
