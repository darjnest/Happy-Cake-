import { Container, Form, Button } from 'react-bootstrap';

export default () => {
  return (
    <Container className="text-center pt-5">
      <p className="fs-1 mb-2">Cuentanos, ¿en que te podemos ayudar?</p>
      <Form>
        <Form.Group className="mb-3" controlId="form-input">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form-textarea">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>
      </Form>
    </Container>
  );
};
