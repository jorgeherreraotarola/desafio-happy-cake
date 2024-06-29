import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    const medidas = 20
    return(
        <Navbar expand="lg" bg='danger' data-bs-theme='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><img alt="" src="/src/assets/home.svg" width={medidas} height={medidas} className="d-inline-block align-center"/>{' '}Home</Nav.Link>
                        <Nav.Link href="/contact"><img alt="" src="/src/assets/book.svg" width={medidas} height={medidas} className="d-inline-block align-center"/>{' '}Contacto</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="/">
                        Happy Cake {' '}<img alt="" src="/src/assets/cake.svg" width="30" height="30" className="d-inline-block align-top"/>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
   )
}
export default NavigationBar