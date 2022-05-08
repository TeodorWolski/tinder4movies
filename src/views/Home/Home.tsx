import styled from 'styled-components';
import { Wrapper, Heading } from './Home.styles';
import { data } from 'assets/data';
import XIcon from 'assets/images/XIcon.svg';
import TickIcon from 'assets/images/TickIcon.svg';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MovieCard from 'components/organisms/MovieCard/MovieCard';

const ButtonWrapper = styled.div`
  display: flex;
  width: 75%;
  margin-top: 10%;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button<{ isDecline?: boolean }>`
  border: none;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ isDecline }) => (isDecline ? XIcon : TickIcon)});
  background-size: ${({ isDecline }) => (isDecline ? '45%' : '75%')};
  background-repeat: no-repeat;
  background-position: center;
`;

const Home = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        <MovieCard key={data[0].id} movie={data[6]} />
        <ButtonWrapper>
          <Button />
          <Button isDecline />
        </ButtonWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
