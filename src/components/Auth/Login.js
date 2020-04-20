import React, { Component } from 'react';
import { navigate } from "gatsby"
import LoginForm from '../Forms/login'
import API from '../../utils/API'
import { handleLogin, isLoggedIn } from "../../services/auth"


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged: false,
            payload: {}
        }
    }
    
     getLoginData = async (formData) => {
        let userData = await API.post('/login', formData);
        handleLogin(userData.data)
    }
    render() {
        console.log('isLoggedIn()', isLoggedIn())
        if (isLoggedIn()) {
            navigate(`/app/board`)
          }
        return (
            <LoginForm data={this.getLoginData}/>
        );
    }
}

export default Login;