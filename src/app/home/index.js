import React, { Component } from 'react'; 
import styled from 'styled-components';

import NavBar from '../nav'
import Footer from './footer';
import { PageContainer } from '../shared/PageContainer'
import LandingImage from '../images/landing_image.png'
import Offer from './offer';
import GetStarted from './getstarted';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 550px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  max-width: 800px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 60px;
`;

const Subtitle = styled.p`
  font-size: 30px;
`;

const Line = styled.div`
  border-bottom: 1px solid #000;
`;


class Home extends Component {
    render() {
      return (
        <PageContainer>
          <NavBar />
          <LandingContainer>
            <div>
              <Title>Joyfix</Title>
              <Subtitle>Fixing cars made easy!</Subtitle>
            </div>
            <Image src={LandingImage} alt="Landing"/>
          </LandingContainer>
          <Line />
           <Offer />
           <GetStarted/>

          <Line />
          <Footer />
        </PageContainer>
      );
    }
  }

export default Home