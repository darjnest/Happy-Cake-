import { Container } from 'react-bootstrap';

export default () => {
  return (
    <Container className="text-center pt-5">
      <p className='fs-2'>La url que intentas ingresar <span className="fw-bold">no existe</span> 😑</p>
    </Container>
  );
};
