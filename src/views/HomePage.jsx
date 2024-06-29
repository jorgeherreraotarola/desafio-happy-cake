import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    return (
        <Container className="text-center mt-1">
            <h1 className="pt-5">
                Bienvenido a <span className="fw-bold">Happy Cake</span>
            </h1>
            <h6> El lugar de los pasteles felices </h6>
            <Row className="mt-5">
                <Col>
                  <Image src="/src/assets/pastel-01.jpg" width="200" height="200" roundedCircle />
                </Col>
            </Row>
        </Container>
      );
}
export default HomePage