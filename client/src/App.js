import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import AddItemView from './AddItemView';
import ItemView from './ItemView';
import Login from './Login';
import FacebookLogin from 'react-facebook-login';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      authenticated:false,
      name:"null",
      email:"null",
      id:0
    }
  }

  pushResults(response){
    this.setState({
      authenticated:true,
      name:response.name,
      email:response.email,
      id:response.id
    });
  }

  render() {
    return (
      <div className="App">
      <div className="Login">
        <FacebookLogin
        appId="244487019290556"
        autoLoad={true}
        fields="name,email,picture"
        callback={(e) => this.pushResults(e)} />
      </div>
      <ItemView state={this.state}/>
      <AddItemView/>
      </div>
    );
  }
}

export default App;
