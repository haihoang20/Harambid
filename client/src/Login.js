import React, { Component } from 'react';
import './App.css';
import AddItemView from './AddItemView';
import ItemView from './ItemView';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {

  test(response){
    // console.log(response);
  }

  render() {
  	const responseFacebook = (response) => {
	  // console.log(response);
	}
    return (
      <div className="Login">
        <FacebookLogin
        appId="244487019290556"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.test} />
      </div>
    );
  }
}

export default Login;
