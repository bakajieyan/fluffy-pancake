import React from 'react';
import { FaPercentage } from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What we will do for you" heading="Roadmap" />
        <div className="services__allItems">
          <ServicesSectionItem
            title="web design"
            icon={<FaPercentage />}
            desc=""
          />
          <ServicesSectionItem
            icon={<FaPercentage />}
            title="web dev"
            desc=""
          />
          <ServicesSectionItem
            icon={<FaPercentage />}
            title="app Dev"
            desc=""
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
