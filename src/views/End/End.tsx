import { Heading, Button, Wrapper } from './End.styles';
const End = () => {
  return (
    <Wrapper>
      <Heading>Wszystkie filmy zostały przejrzane!</Heading>
      <a href="https://github.com/TeodorWolski/tinder4movies">kod źródłowy</a>
      <Button as="a" href="/">
        Wróć na początek
      </Button>
    </Wrapper>
  );
};

export default End;
