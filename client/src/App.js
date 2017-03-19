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
      name:null,
      email:null,
      picture: null,
      id:0
    }
  }

  pushResults(response){
    this.setState({
      authenticated:true,
      name:response.name,
      email:response.email,
      picture: response.picture,
      id:response.id
    });

    addNewMember()
  }

  addNewMember = (){
    fetch('/api/member/addMember', {
      headers: {
          'Content-Type': 'application/json'
      },
    accept: 'application/json',
    method: "POST",
    body: JSON.stringify( this.state )
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
      <AddItemView state={this.state}/>
      </div>
    );
  }
}

export default App;
