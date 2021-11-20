import styled from 'styled-components';
import logo from '../img/logo.png';

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  .logo {
    img {
      width: 60px;
    }
  }
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
    }
    .primary-btn {
      margin-left: 3rem;
      button {
        padding: 0.6rem 1.3rem;
        background-color: rgba(57, 95, 246, 0.6);
        border: none;
        border-radius: 70px;
        color: #fff;
        transition: background-color 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: rgba(57, 95, 246, 1);
        }
      }
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-items">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">FAQs</a>
        </li>
        <li>
          <a href="#!">Activity</a>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
        <li className="primary-btn">
          <button type="button">GET CONNECTED</button>{' '}
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
