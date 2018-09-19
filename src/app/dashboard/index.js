import React, { Component } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../shared/PageContainer';

const TabContainer = styled.div`
  display: flex;
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

const ProgressContainer = styled.div`
  width: 100%;
`;

const ProgressBar = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  counter-reset: step;
`;

const Step = styled.li`
  flex-basis: 300px;
  width: 20%;
  position: relative;
  text-align: center;

  &::before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    border: 2px solid #bebebe;
    display: block;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    line-height: 27px;
    text-align: center;
    font-weight: bold;

    border-color: ${props => {
      return props.active ? '#3aac5d' : '';
    }};

    background: ${props => {
      return props.active ? '#3aac5d' : 'white';
    }};

    color: ${props => {
      return props.active ? 'white' : '#bebebe';
    }};
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 15px;
    left: -50%;
    z-index: -1;

    background: ${props => {
      return props.active ? '#3aac5d' : '#979797';
    }};
  }

  &:first-child:after {
    content: none;
  }
`;

class Dashboard extends Component {
  state = {
    active_tab: 'appointment',
    completed_step: 3
  };

  handleTabClick = type => {
    this.setState({ active_tab: type });
  };

  render() {
    return (
      <PageContainer>
        <TabContainer>
          <Button
            active={this.state.active_tab === 'appointment'}
            onClick={() => this.handleTabClick('appointment')}
          >
            Book appointment
          </Button>
          <Button
            active={this.state.active_tab === 'history'}
            onClick={() => this.handleTabClick('history')}
          >
            History
          </Button>
        </TabContainer>
        <ProgressContainer>
          <ProgressBar>
            <Step active={this.state.completed_step >= 1}>Select a service</Step>
            <Step active={this.state.completed_step >= 2}>Fill out information</Step>
            <Step active={this.state.completed_step >= 3}>Done</Step>
          </ProgressBar>
        </ProgressContainer>
      </PageContainer>
    );
  }
}

export default Dashboard;
