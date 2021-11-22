import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import { CTAButton, GradientCard, MainTitle } from './';
import {
  avatar,
  person,
  person3,
  bitcoin,
  bitcoin2,
  bitcoin3,
  computer,
} from './imports';

const GradientCardsSectionStyled = styled.div`
  .load {
    padding-top: 3rem;
    text-align: center;
  }
`;

const GradientCardsSection = () => {
  return (
    <GradientCardsSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle
            title="New Upcoming Items"
            subtitle="Discover Upcoming Items"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          />
        </div>
        <div className="gradient-cards-con">
          <GradientCard
            image={person}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={person3}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={bitcoin3}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={computer}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
          />
        </div>
        <div className="load">
          <CTAButton name="View More" link="#!" />
        </div>
      </SectionStyled>
    </GradientCardsSectionStyled>
  );
};

export default GradientCardsSection;
