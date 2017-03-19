import React, { Component } from 'react';
import './App.css';
import AddItemView from './AddItemView';
import ItemView from './ItemView';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {

  render() {
  	const responseFacebook = (response) => {
	  console.log(response);
	}
    return (
      <div className="Login">
        <FacebookLogin
		    appId="1088597931155576"
		    autoLoad={true}
		    fields="name,email,picture"
		    callback={responseFacebook} />
      </div>
    );
  }
}

export default Login;