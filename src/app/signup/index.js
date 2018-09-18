import React, { Component } from 'react'; 
import {withRouter} from "react-router-dom";

import Context from "../context";
import Form from '../shared/FormContainer';
import NavBar from '../nav'
import { PageContainer } from '../shared/PageContainer'


class Signup extends Component {
  state = {
    account: {
      username: "",
      password: "",
      phone_number: "",
      email: "",
      t_and_c: false,
    },
    missing_values: [],
    invalid_submission: false
  }

  handleInputChange = (e, type) => {
    this.setState({ invalid_submission: false, missing_values: [] })
    switch(type) {
      case 'username':
        this.setState({ account: { ...this.state.account, username: e.target.value }});
        break;
      case 'phone_number':
        this.setState({ account: { ...this.state.account, phone_number: e.target.value }});
        break;
      case 'email':
        this.setState({ account: { ...this.state.account, email: e.target.value }});
        break;
      case 'password':
        this.setState({ account: { ...this.state.account, password: e.target.value }});
        break;
      case 'tc':
        this.setState({ account: { ...this.state.account, t_and_c: !this.state.t_and_c }});
        break;
      default:
    }
  }

  handleSignup = (registerAccount) => {
    const missing_values = [];

    const account = this.state.account;

    if (account.username === "") {
      missing_values.push('Username');
    }

    if (account.phone_number === "") {
      missing_values.push('Phone Number');
    }

    if (account.email === "") {
      missing_values.push('Email');
    }

    if (account.password === "") {
      missing_values.push('Password');
    }

    if (!account.t_and_c) {
      missing_values.push('Terms and Conditions');
    }

    if (missing_values.length !== 0) {
      this.setState({ invalid_submission: true, missing_values })
    } else {
      const success = registerAccount(account);

      if (success) {
        this.props.history.push("/dashboard");
      }
    }
  }

  render() {
    return (
      <PageContainer>
        <NavBar />
        <Form.PageContainer>
          <Context.Provider>
            <Context.Consumer>
              {
                context => {
                  return (
                    <Form.FormContainer>
                        <h1>Sign up to access dashboard!</h1>
                        <input 
                          type="text" 
                          placeholder="Username" 
                          required={true}
                          onChange={ e => this.handleInputChange(e, 'username')}/>
                          
                        <input 
                          type="tel" 
                          placeholder="Phone Number" 
                          required={true}
                          onChange={e => this.handleInputChange(e, 'phone_number')}/>
                        
                        <input 
                          type="email" 
                          placeholder="Email" 
                          required={true}
                          onChange={e => this.handleInputChange(e, 'email')}/>
                        <input 
                          type="password" 
                          placeholder="password" 
                          required={true}
                          onChange={e => this.handleInputChange(e, 'password')}/>

                        <label >
                          <input type="checkbox" onClick={e => this.handleInputChange(e, 'tc')}/>
                          I agree to the terms and conditions of Joyfix.
                        </label>

                        {
                        (this.state.invalid_submission? 
                            <Form.ErrorMessage>
                              Missing values: {this.state.missing_values.join(', ')}
                            </Form.ErrorMessage> : null)
                        }
                        <Form.Button onClick={() => this.handleSignup(context.registerAccount)}>
                          Submit
                        </Form.Button>
                    </Form.FormContainer>
                  )
                }
              }
            </Context.Consumer>
          </Context.Provider>
        </Form.PageContainer>
      </PageContainer>
    );
  }
}

export default withRouter(Signup);