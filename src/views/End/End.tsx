import { useNavigate } from 'react-router-dom';
import { Heading, Button, Wrapper } from './End.styles';
const End = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Heading>Wszystkie filmy zostały przejrzane!</Heading>
      <a href="https://github.com/TeodorWolski/tinder4movies">kod źródłowy</a>
      <Button onClick={() => navigate('/')}>Wróć na początek</Button>
    </Wrapper>
  );
};

export default End;
