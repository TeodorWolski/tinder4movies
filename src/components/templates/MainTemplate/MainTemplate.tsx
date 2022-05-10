import { Wrapper } from './MainTemplate.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
