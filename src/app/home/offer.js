import React from 'react';
import styled from 'styled-components';

import ImageContainer from '../shared/ImageContainer';
import Windshield from '../images/windshield.png';
import OilChange from '../images/oil.png';
import CarInspection from '../images/inspection.png';
import AirFilter from '../images/air-filter.png';
import TireChange from '../images/car-tire-change.png';
import Engine from '../images/piston.png';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.p`
  font-size: 50px;
  text-align: center;
`;

const P = styled.p`
  font-size: 30px;
`;

const OfferSection = () => {
  return (
    <React.Fragment>
      <Title>What we offer</Title>
      <Container>
        <ImageContainer>
          <img src={Windshield} alt="wind shield service" />
          <P>Wipers Change</P>
        </ImageContainer>

        <ImageContainer>
          <img src={OilChange} alt="oil change service" />
          <P>Oil Change</P>
        </ImageContainer>

        <ImageContainer>
          <img src={CarInspection} alt="car inspection service" />
          <P>Car Inspection</P>
        </ImageContainer>
      </Container>

      <Container>
        <ImageContainer>
          <img src={AirFilter} alt="air filter service" />
          <P>Air Filter Change</P>
        </ImageContainer>

        <ImageContainer>
          <img src={TireChange} alt="tire change service" />
          <P>Tire Change</P>
        </ImageContainer>

        <ImageContainer>
          <img src={Engine} alt="engine inspection service" />
          <P>Engine Inspection</P>
        </ImageContainer>
      </Container>
    </React.Fragment>
  );
};

export default OfferSection;
