import React from 'react';

const default_appointment = {
    appointment_service_type: "",
    appointment_car_make: "",
    appointment_car_model: "",
    appointment_license_number: "",
    appointment_home_address: "",
    appointment_date: "",
    appointment_comment: ""
}

const default_values = {
    username: "",
    password: "",
    phone_number:"",
    agree_ac: false,
    ...default_appointment,
    accounts: [
        {
            username: "admin",
            password: "admin"
        }
    ]
}


const Context = React.createContext();

class Provider extends React.Component {
    state = {
        ...default_values,
        handleUsernameInput: this.handleUsernameInput,
        handlePasswordInput: this.handlePasswordInput,
        handleLogin: this.handleLogin
    }

    handleUsernameInput = (username) => {
        this.setState( username );
    }

    handlePasswordInput = (password) => {
        this.setState( password );
    }

    handleLogin = () => {
        this.state.accounts.forEach(account => {
            if (account.username === this.state.username && 
                account.password === this.state.password) {
                return true;
            }
        });

        return false;
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer; 

export default {
    Provider,
    Consumer
}