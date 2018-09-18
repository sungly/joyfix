import React from 'react';

const default_appointment = {
  appointment_service_type: '',
  appointment_car_make: '',
  appointment_car_model: '',
  appointment_license_number: '',
  appointment_home_address: '',
  appointment_date: '',
  appointment_comment: ''
};

const default_values = {
  appointment: default_appointment,
  accounts: [
    {
      username: 'admin',
      password: 'admin',
      phone_number: '9051234512',
      email: 'admin@admin.com',
      t_and_c: true
    }
  ]
};

const Context = React.createContext();

class Provider extends React.Component {
  state = default_values;

  validateAccount = (username, password) => {
    let flag = false;
    this.state.accounts.forEach(account => {
      if (account.username === username && account.password === password) {
        flag = true;
      }
    });
    return flag;
  };

  /**
   * TODO: new account not being added to state properly
   */
  registerAccount = new_account => {
    const accounts = [...this.state.accounts, new_account];

    this.setState({ accounts });

    return true;
  };

  render() {
    const values = {
      ...this.state,
      handleUsernameInput: this.handleUsernameInput,
      handlePasswordInput: this.handlePasswordInput,
      validateAccount: this.validateAccount,
      registerAccount: this.registerAccount
    };

    return <Context.Provider value={values}>{this.props.children}</Context.Provider>;
  }
}

const Consumer = Context.Consumer;

export default {
  Provider,
  Consumer
};
