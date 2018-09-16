import React, { Component } from 'react'; 
import styled from 'styled-components';

import Context from "../context";


class Login extends Component {
  render() {
    return (
      <Context.Provider>
        <Context.Consumer>
          {
            context => {
              return (
                <div>
                  <h1>LOGIN</h1>
                </div>
              )
            }
          }
        </Context.Consumer>
      </Context.Provider>
    );
  }
}

export default Login;