import React, { Component } from 'react'; 
import styled from 'styled-components';

import NavBar from '../nav'
import { PageContainer } from '../shared/PageContainer'

const Height = styled.div`
  height: 800px; 
`;

class Home extends Component {
    render() {
      return (
        <PageContainer>
          <NavBar />
          <p>Home</p>
          <Height />
        </PageContainer>
      );
    }
  }

export default Home