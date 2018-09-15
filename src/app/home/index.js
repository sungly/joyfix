import React, { Component } from 'react'; 
import styled from 'styled-components';

import NavBar from '../nav'
import { PageContainer } from '../shared/PageContainer'
import LandingImage from '../images/landing_image.png'

const Height = styled.div`
  height: 800px; 
`;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const LeftContainer = styled.div`
  min-width: 700px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 60px;
`;

const Subtitle = styled.p`
  font-size: 30px;
`;

class Home extends Component {
    render() {
      return (
        <PageContainer>
          <NavBar />
          <LandingContainer>
            <LeftContainer>
              <Title>Joyfix</Title>
              <Subtitle>Fixing cars made easy!</Subtitle>
            </LeftContainer>
            <Image src={LandingImage} alt="Landing"/>
          </LandingContainer>
          <Height />
        </PageContainer>
      );
    }
  }

export default Home