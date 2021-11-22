import styled from 'styled-components';
import { CTAButton, Navigation, SmallHeading } from './';
import blockchain from '../img/bchain.png';

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h1 {
        padding: 1.8rem 0;
      }
      .btns-con {
        margin-top: 3rem;
      }
    }
    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      .left {
        p {
          display: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      grid-template-columns: 1fr;

      .right {
        display: none;
      }
    }
  }

  @media (max-width: 425px) {
    .content {
      .left {
        > * {
          align-self: center;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        .btns-con a:not(:first-child) {
          display: none;
        }
      }
    }
  }
`;

const MainContent = () => {
  return (
    <MainContentStyled>
      <Navigation />
      <div className="content">
        <div className="left">
          <SmallHeading
            title="All Digital Currencies in One Place"
            identifier="Before"
          />
          <h1>
            All NFTs You need in One Marketplace The Best Place to Collect , Buy
            and Sell <span className="GradientText">Awesome NFTs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id
            unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem.
            Cumque obcaecati sint officiis quis laboriosam vitae, error
            molestiae temporibus voluptatum consectetur, quibusdam magni,
            delectus a autem soluta optio laborum!
          </p>
          <div className="btns-con">
            <CTAButton name="discover more" link="#!" />
            <CTAButton name="get help" link="#!" />
          </div>
        </div>
        <div className="right">
          <img src={blockchain} alt="Block Chain" />
        </div>
      </div>
    </MainContentStyled>
  );
};

export default MainContent;
