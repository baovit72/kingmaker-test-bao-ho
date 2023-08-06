import { Container } from "./Container";

export default {
  title: 'Container',
  component: Container,
};

export const Default = () => (
  <Container>
    <div style={{ width: '100%', height: 200, color: 'white', background: 'black' }}>Content inside the container</div>
  </Container>
);
