import styled from 'styled-components';
import time from '../img/time.svg';
import heart from '../img/heart.svg';

const GradientCardStyled = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all 1s ease-in-out;
  background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
  animation: color 3s infinite ease-in-out;

  @keyframes color {
    0% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    50% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    70% {
      background: linear-gradient(130deg, #022894 0%, #7f41db 100%);
    }
    100% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
  }

  .g-card {
    margin: 0.2rem;
    .inner-content {
      padding: 0.8rem;
      background-color: #091026;
      border-radius: 20px;
    }
    .image {
      position: relative;
      width: 100%;
      img:first-child {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
      }
      .name {
        position: absolute;
        left: 50%;
        bottom: -26px;
        transform: translateX(-50%);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.5rem;
        width: 75%;
        background-color: #03091f;
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 70px;
        img {
          margin-right: 2rem;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
    .card-content {
      padding-top: 3rem;
      .card-title {
        padding-bottom: 0.6rem;
        font-size: 1.3rem;
        font-weight: 500;
      }
      .price {
        color: #6bbe92;
      }
      .l-text {
        opacity: 0.5;
      }
      .duration {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px dashed rgba(255, 255, 255, 0.2);
        p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.6rem;
            width: 18px;
            object-fit: cover;
          }
        }
      }
      .cta-btn {
        width: 100%;
        a {
          display: inline-block;
          margin: 0.6rem 0;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

const GradientCard = ({ image, avatar, name, price, title, ctaButton }) => {
  return (
    <GradientCardStyled>
      <div className="g-card">
        <div className="inner-content">
          <div className="image">
            <img src={image} alt={title} />
            <div className="name">
              <img src={avatar} alt={name} />
              <p>{name}</p>
            </div>
          </div>
          <div className="card-content">
            <h6 className="card-content">{title}</h6>
            <p>
              Price <span className="price">{price}</span>
              {'  '} <span className="l-text">1 of 15</span>
            </p>
            <div className="duration">
              <p>
                <img src={time} alt="time" />7 Hours Ago
              </p>
              <p>
                <img src={heart} alt="likes" />
                200 Likes
              </p>
            </div>
            <div className="cta-btn">{ctaButton}</div>
          </div>
        </div>
      </div>
    </GradientCardStyled>
  );
};

export default GradientCard;
