import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormContact = () => {
    const [values, setValues] = useState({
        correo:"",
        description:""
    })
    const GetInput = (e) => {
        const { target } = e;
        const { name, value } = target;
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues);
    }
    const sendContactForm = (e) => {
        e.preventDefault();
        // const email = e.correo.target.value
        console.log(values)
        console.log('Envio de Formulario: parametros de envio',values );
    }
    return (
        <Form onSubmit={sendContactForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name='correo' onChange={GetInput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" style={{ height: '100px' }} name='description' onChange={GetInput}/>
            </Form.Group>
            <Button variant="danger" type='submit'>
                Enviar
            </Button>
        </Form>
    )
}
export default FormContact