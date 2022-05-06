import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled from 'styled-components';

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <h1>Hello World!</h1>
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
