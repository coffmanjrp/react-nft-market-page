import styled from 'styled-components';

export const InnerLayout = styled.div`
  padding: 4rem 15rem;

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.5rem;
  }
`;

export const SectionStyled = styled.section`
  padding: 4rem 0;
`;
