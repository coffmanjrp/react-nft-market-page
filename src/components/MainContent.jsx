import styled from 'styled-components';
import { Navigation } from './';

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);
`;

const MainContent = () => {
  return (
    <MainContentStyled>
      <Navigation />
    </MainContentStyled>
  );
};

export default MainContent;
