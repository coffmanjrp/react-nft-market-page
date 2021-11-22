import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import { CTAButton, GradientCard, MainTitle } from './';
import { avatar, bitcoin, bitcoin2, person3, computer } from './imports';

const DemonstrationSectionStyled = styled.div``;

const DemonstrationSection = () => {
  const ctaButton = <CTAButton name="Place bid" link="#!" />;

  return (
    <DemonstrationSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle
            title="Live Demonstration"
            subtitle="Live Demonstration"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          />
        </div>
        <div className="gradient-cards-con">
          <GradientCard
            image={computer}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
            ctaButton={ctaButton}
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
            ctaButton={ctaButton}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
            ctaButton={ctaButton}
          />
          <GradientCard
            image={person3}
            avatar={avatar}
            name="@Joel Clock"
            price="0.067 ETH"
            title="Just a dummy title"
            ctaButton={ctaButton}
          />
        </div>
      </SectionStyled>
    </DemonstrationSectionStyled>
  );
};

export default DemonstrationSection;
