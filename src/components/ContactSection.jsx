import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import { map } from './imports';

const ContactSectionStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background-color: #020c31;
  text-align: center;
  z-index: 1;
  p {
    opacity: 0.5;
  }
  .bg-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    img {
      width: 80%;
      opacity: 0.08;
    }
  }
  .contact-title {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 4rem;
      height: 2px;
      background-color: #eb3fa9;
    }
  }

  @media (max-width: 1024px) {
    .bg-image {
      width: 100%;
    }
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <SectionStyled>
        <h3 className="contact-title">Contact Us</h3>
        <p>Roseville CA</p>
        <p>+44 786 997 7162</p>
        <p>coffmanjrp@gmail.com</p>
        <div className="bg-image">
          <img src={map} alt="Map" />
        </div>
      </SectionStyled>
    </ContactSectionStyled>
  );
};

export default ContactSection;
