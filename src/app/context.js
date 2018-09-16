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
    state = default_values



    validateAccount = (username, password) => {
        let flag = false; 
        this.state.accounts.forEach(account => {
            if (account.username === username && 
                account.password === password) {
                flag = true;
            }
        });
        return flag;
    }

    render() {
        const values = {
            ...this.state,
            handleUsernameInput: this.handleUsernameInput,
            handlePasswordInput: this.handlePasswordInput,
            validateAccount: this.validateAccount
        }

        return(
            <Context.Provider value={values}>
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