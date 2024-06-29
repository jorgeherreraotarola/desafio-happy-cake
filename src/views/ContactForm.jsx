import { Container } from "react-bootstrap";
import FormContact from "../components/ContactForms";
const ContactForm = () => {
    return (
        <>
            <Container className="text-center mt-2">
                <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
                <FormContact/>    
            </Container>
        </>
    )
}
export default ContactForm