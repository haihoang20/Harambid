import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import AddItemView from './AddItemView';
import ItemView from './ItemView';
import Login from './Login';
import FacebookLogin from 'react-facebook-login';

class App extends Component {
  render() {
    const responseFacebook = (response) => {
    console.log(response);
  }
    return (
      <div className="App">
      <div className="Login">
        <FacebookLogin
        appId="244487019290556"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} />
      </div>
      <ItemView/>
      </div>
    );
  }
}

export default App;
