import React, { Component } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../shared/PageContainer';

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div`
  width: 100px;
  border: 1px solid #000;
`;

const Button = styled.div`
  background-color: ${props => {
    return props.active ? '#1fa3ec' : '	#D3D3D3';
  }};
  width: 150px;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 0.317rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    box-shadow: inset 0 3px 4px hsla(0, 0%, 0%, 0.2);
  }

  &:focus {
    outline: thin dotted #444;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
`;

class Dashboard extends Component {
  state = {
    active: 'appointment'
  };

  handleTabClick = type => {
    this.setState({ active: type });
  };

  render() {
    return (
      <PageContainer>
        <TabContainer>
          <Button
            active={this.state.active === 'appointment'}
            onClick={() => this.handleTabClick('appointment')}
          >
            Book appointment
          </Button>
          <Button
            active={this.state.active === 'history'}
            onClick={() => this.handleTabClick('history')}
          >
            History
          </Button>
        </TabContainer>
      </PageContainer>
    );
  }
}

export default Dashboard;
