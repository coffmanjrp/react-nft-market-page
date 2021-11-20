import styled from 'styled-components';
import video from '../img/marketing.mp4';
import circles from '../img/circles.svg';

const MainAreaStyled = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: -300px;
    right: -400px;
    width: 100%;
    height: 100%;
  }
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const MainArea = () => {
  return (
    <MainAreaStyled>
      <video muted playsInline autoPlay loop className="video">
        <source src={video} />
      </video>
      <img src={circles} alt="circles" className="overlay" />
    </MainAreaStyled>
  );
};

export default MainArea;
