import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"
export default function Menu() {
  return (
    <Container>
      <Navbar expand="lg" className={`bg-dark ${styles.navGradiente} px-4 m-0`}>

        <Navbar.Brand href="/" className="text-light">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#link" className="text-light">Produtos</Nav.Link>

          </Nav > 
        </Navbar.Collapse >

      </Navbar>
    </Container>
  );
}