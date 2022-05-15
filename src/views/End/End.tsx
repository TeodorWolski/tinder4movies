import { Heading, Button, Wrapper, Link } from './End.styles';
const End = () => {
  return (
    <Wrapper>
      <Heading>Wszystkie filmy zostały przejrzane!</Heading>
      <Link href="https://github.com/TeodorWolski/tinder4movies">
        kod źródłowy
      </Link>
      <Button as="a" href="/tinder4movies/">
        Wróć na początek
      </Button>
    </Wrapper>
  );
};

export default End;
