import styled from 'styled-components';

const CTAButtonStyled = styled.a`
  display: inline-block;
  padding: 0.9rem 1.5rem;
  background: linear-gradient(130deg, #395ff6, #eb3fa9);
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:last-child {
    margin-left: 1.5rem;
  }
  &:hover {
    background: linear-gradient(120deg, #eb3fa9, #395ff6);
  }
`;

const CTAButton = ({ name, link }) => {
  return <CTAButtonStyled href={link}>{name}</CTAButtonStyled>;
};

export default CTAButton;
