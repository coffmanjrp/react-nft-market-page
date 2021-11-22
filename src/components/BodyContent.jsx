import styled from 'styled-components';
import {
  BlogsSection,
  ContactSection,
  DemonstrationSection,
  GradientCardsSection,
  MainTitle,
  SellerCard,
} from './';
import { InnerLayout } from '../Layouts';

const BodyContentStyled = styled.div`
  .sellercards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    background-color: #020a27;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p {
      text-align: center;
      opacity: 0.7;
    }
  }
`;

const BodyContent = () => {
  return (
    <BodyContentStyled>
      <InnerLayout>
        <MainTitle
          title="Top Sellers This Month"
          subtitle="All Entrepreneurs"
        />
        <div className="sellercards">
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogsSection />
        <GradientCardsSection />
        <DemonstrationSection DemonstrationSection />
      </InnerLayout>
      <ContactSection />
      <footer>
        <p>Copyright &copy;React Animated Website. All Rights Reserved</p>
      </footer>
    </BodyContentStyled>
  );
};

export default BodyContent;
