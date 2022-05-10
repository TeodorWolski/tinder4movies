import { useNavigate } from 'react-router-dom';
import { Heading, Button, Wrapper } from './End.styles';
const End = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Heading>Wszystkie filmy zostały przejrzane!</Heading>
      <Button onClick={() => navigate('/')}>Wróć na początek</Button>
    </Wrapper>
  );
};

export default End;
