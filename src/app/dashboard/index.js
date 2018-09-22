// TODO: refactor this terrible code

import React, { Component } from 'react';
import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker';

import Form from '../shared/FormContainer';
import { PageContainer } from '../shared/PageContainer';
import Context from '../context';

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
  margin: 0 auto;
  margin-top: 100px;
`;

const ProgressBar = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
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

const StepContainer = styled.div`
  flex-basis: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

const RadioContainer = styled.div`
  input {
    margin-top: 20px;
  }

  font-size: 22px;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
`;

const SuccessMessage = styled.h1`
  color: green;
`;

class Dashboard extends Component {
  state = {
    active_tab: 'appointment',

    completed_step: 0,
    invalid_submission: false,
    missing_values: [],
    date: new Date(),
    appointment_info: {
      service_selected: '',
      make: '',
      model: '',
      home_address: '',
      phone_number: '',
      additional_info: '',
      license_plate: '',
      test: new Date()
    }
  };

  handleTabClick = type => {
    this.setState({ active_tab: type });
  };

  handleSelectService = e => {
    this.setState({
      appointment_info: { ...this.state.appointmenet_info, service_selected: e.target.value }
    });
  };

  handleServiceContinue = () => {
    if (this.state.appointment_info.service_selected !== '') {
      this.setState({ completed_step: 1 });
    }
  };

  handleDateChange = date => this.setState({ date });

  handleInputChange = (e, type) => {
    this.setState({ invalid_submission: false, missing_values: [] });
    switch (type) {
      case 'make':
        this.setState({
          appointment_info: { ...this.state.appointment_info, make: e.target.value }
        });
        break;
      case 'model':
        this.setState({
          appointment_info: { ...this.state.appointment_info, model: e.target.value }
        });
        break;
      case 'license_plate':
        this.setState({
          appointment_info: { ...this.state.appointment_info, license_plate: e.target.value }
        });
        break;
      case 'home_address':
        this.setState({
          appointment_info: { ...this.state.appointment_info, home_address: e.target.value }
        });
        break;
      case 'phone_number':
        this.setState({
          appointment_info: { ...this.state.appointment_info, phone_number: e.target.value }
        });
        break;
      case 'additional_info':
        this.setState({
          appointment_info: { ...this.state.appointment_info, additional_info: e.target.value }
        });
        break;
      default:
    }
  };

  handleSubmit = () => {
    const { make, model, license_plate, home_address, phone_number } = this.state.appointment_info;
    const missing_values = [];

    if (!make) {
      missing_values.push('Make');
    }

    if (!model) {
      missing_values.push('Model');
    }

    if (!license_plate) {
      missing_values.push('License Plate');
    }

    if (!home_address) {
      missing_values.push('Home Address');
    }

    if (!phone_number) {
      missing_values.push('Phone Number');
    }

    if (missing_values.length !== 0) {
      this.setState({ invalid_submission: true, missing_values });
    } else {
      this.setState({ completed_step: 2 }, () => {
        setTimeout(() => this.setState({ completed_step: 3 }), 2000);
      });
    }
  };

  configureStep = () => {
    const { completed_step } = this.state;

    if (this.state.active_tab === 'appointment') {
      if (completed_step === 0) {
        return (
          <StepContainer>
            <h3>Select a service</h3>

            <RadioContainer>
              <label>
                <input
                  type="radio"
                  value="Wipers Change"
                  name="service"
                  onClick={e => this.handleSelectService(e)}
                />{' '}
                Wipers Change{' '}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Oil Change"
                  name="service"
                  onClick={e => this.handleSelectService(e)}
                />{' '}
                Oil Change{' '}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Car Inspection"
                  name="service"
                  onClick={e => this.handleSelectService(e)}
                />{' '}
                Car Inspection{' '}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Air Filter Change"
                  name="service"
                  onClick={e => this.handleSelectService(e)}
                />{' '}
                Air Filter Change{' '}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="Tire Change"
                  name="service"
                  onClick={e => this.handleSelectService(e)}
                />{' '}
                Tire Change
              </label>
              <ButtonContainer>
                <Form.Button onClick={this.handleServiceContinue}>Continue</Form.Button>
              </ButtonContainer>
            </RadioContainer>
          </StepContainer>
        );
      } else if (completed_step === 1) {
        return (
          <StepContainer>
            <Form.FormContainer>
              <input
                type="text"
                placeholder="Make"
                onChange={e => this.handleInputChange(e, 'make')}
              />
              <input
                type="text"
                placeholder="Model"
                onChange={e => this.handleInputChange(e, 'model')}
              />
              <input
                type="text"
                placeholder="License Plate Number"
                onChange={e => this.handleInputChange(e, 'license_plate')}
              />
              <input
                type="text"
                placeholder="Home Address"
                onChange={e => this.handleInputChange(e, 'home_address')}
              />
              <input
                type="text"
                placeholder="Phone Number"
                onChange={e => this.handleInputChange(e, 'phone_number')}
              />
            </Form.FormContainer>
            <div>
              <DateTimePicker onChange={this.handleDateChange} value={this.state.date} />
              <Form.FormContainer>
                <input
                  type="textbox"
                  placeholder="Additional information"
                  onChange={e => this.handleInputChange(e, 'additional_information')}
                />
                {this.state.invalid_submission ? (
                  <Form.ErrorMessage>
                    Missing values: {this.state.missing_values.join(', ')}
                  </Form.ErrorMessage>
                ) : null}
              </Form.FormContainer>

              <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
            </div>
          </StepContainer>
        );
      } else if (completed_step === 2) {
        return (
          <StepContainer>
            <h3>loading...</h3>
          </StepContainer>
        );
      } else {
        return (
          <StepContainer>
            <SuccessMessage>Requested Submitted!</SuccessMessage>
            <h3>Appointment Summary</h3>

            <p>Service: {this.state.appointment_info.service_selected}</p>
            <p>
              Car Make & Model: {this.state.appointment_info.make}{' '}
              {this.state.appointment_info.model}
            </p>
            <p>Home address: {this.state.appointment_info.home_address}</p>
            <p>Phone Number: {this.state.appointment_info.phone_number}</p>
            <p>License Plate: {this.state.appointment_info.license_plate}</p>

            <p>Date: {String(this.state.date)}</p>
          </StepContainer>
        );
      }
    } else {
      return (
        <div>
          {this.state.appointment_info.service_selected &&
          this.state.date &&
          this.state.appointment_info.home_address ? (
            <div>
              <h2>In Progress</h2>
              <p>Service: {this.state.appointment_info.service_selected}</p>
              <p>Date: {String(this.state.date)}</p>
              <p>Location: {this.state.appointment_info.home_address}</p>
            </div>
          ) : (
            <p>No active appointments</p>
          )}
        </div>
      );
    }
  };

  render() {
    const stepDisplay = this.configureStep();

    return (
      <Context.Provider>
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
          {this.state.active_tab === 'appointment' ? (
            <ProgressContainer>
              <ProgressBar>
                <Step active={this.state.completed_step >= 1}>Select a service</Step>
                <Step active={this.state.completed_step >= 2}>Fill out information</Step>
                <Step active={this.state.completed_step >= 3}>Done</Step>
              </ProgressBar>
            </ProgressContainer>
          ) : null}

          {stepDisplay}
        </PageContainer>
      </Context.Provider>
    );
  }
}

export default Dashboard;
