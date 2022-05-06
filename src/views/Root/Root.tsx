import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
import StarIcon from 'assets/images/StarIcon.svg';

const Heading = styled.h1`
  &::after {
    content: ' movie!';
  }
`;

const CardWrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  height: 42rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  width: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MovieInfo = styled.div`
  bottom: 0;
  position: absolute;
  z-index: 999999999;
  background-color: white;
  width: 100%;
  height: 11rem;
`;

const RatingSection = styled.div`
  position: absolute;
  top: 0;
  height: 3.5rem;
  width: 14rem;
  border-radius: 1.8rem 1.8rem 9.8rem 9.8rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding-left: 1.75rem;
    height: 65%;
    width: 65%;
  }

  p {
    padding-right: 5rem;
    color: #f8b84e;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Select your favourite</Heading>
        <CardWrapper>
          <RatingSection>
            <img src={StarIcon} alt="starIcon" />
            <p>7.5</p>
          </RatingSection>
          <img src="https://fwcdn.pl/fpo/08/43/843/6901032.3.jpg" alt="" />
          <MovieInfo>
            <h1>Chłopaki nie płaczą</h1>
          </MovieInfo>
        </CardWrapper>
        <div>
          <button></button>
          <button></button>
        </div>
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
