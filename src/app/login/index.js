import React, { Component } from 'react'; 
import {withRouter} from "react-router-dom";

import Context from "../context";
import Form from '../shared/FormContainer';
import NavBar from '../nav'
import { PageContainer } from '../shared/PageContainer'


class Login extends Component {
  state = {
    username: "",
    password: "",
    invalidAccount: false
  }

  handleUsernameInput = (e) => {
    this.setState({ invalidAccount: false, username: e.target.value });
  }

  handlePasswordInput = (e) => {
      this.setState({ invalidAccount: false, password: e.target.value });
  }

  handleLogin = (validateAccount) => {
    const validAccount = validateAccount(this.state.username, this.state.password);

    if (validAccount) {
      this.props.history.push("/dashboard");
    } else {
      this.setState({ invalidAccount: true })
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
                  console.log(context)
                  return (
                    <Form.FormContainer>
                        <h1>Sign in to dashboard</h1>
                        <input 
                          type="text" 
                          placeholder="Username" 
                          onChange={ e => this.handleUsernameInput(e)}/>
                        <input 
                          type="password" 
                          placeholder="password" 
                          onChange={e => this.handlePasswordInput(e)}/><br/>
                        {
                          (this.state.invalidAccount? 
                            <Form.ErrorMessage>
                              Invalid username or password. Please try again!
                            </Form.ErrorMessage> : null)
                        }
                        <Form.Button onClick={() => this.handleLogin(context.validateAccount)}>
                          Sign in
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

export default withRouter(Login);