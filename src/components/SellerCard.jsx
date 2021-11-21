import styled from 'styled-components';
import data from '../data';

const SellerCardStyled = styled.div`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.03);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
  .SellerCard {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem 1rem;
    .number {
      padding-right: 1rem;
      font-size: 1.6rem;
      opacity: 0.5;
      p {
        font-size: 700;
      }
    }
    .profile {
      display: flex;
      img {
        margin-right: 1rem;
        width: 70px;
        height: 70px;
        border: 2px solid #395ff6;
        border-radius: 50%;
        object-fit: cover;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        h4 {
          font-weight: 500;
        }
        p {
          padding-top: 0.5rem;
          opacity: 0.5;
        }
      }
    }
  }
`;

const SellerCard = () => {
  return (
    <SellerCardStyled>
      {data.map((item) => (
        <div key={item.id} className="SellerCard">
          <div className="number">
            <p>0 {item.id}</p>
          </div>
          <div className="profile">
            <img src={item.image} alt={item.name} />
            <div className="text">
              <h4>{item.name}</h4>
              <p>{item.currency}</p>
            </div>
          </div>
        </div>
      ))}
    </SellerCardStyled>
  );
};

export default SellerCard;
