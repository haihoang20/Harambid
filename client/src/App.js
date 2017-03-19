import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import AddItemView from './AddItemView';
import ItemView from './ItemView';
import Login from './Login';
import FacebookLogin from 'react-facebook-login';
import Modal from 'react-modal';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      authenticated:false,
      name:"null",
      email:"null",
      id:0,
      modelOpen:false
    }
    this.addItem = this.addItem.bind(this);
    this.pushResults = this.pushResults.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      authenticated:nextProps.state.authenticated,
      name:nextProps.state.name,
      email:nextProps.state.email,
      id:nextProps.state.id
    });
  }

  pushResults(response){
    this.setState({
      authenticated:true,
      name:response.name,
      email:response.email,
      id:response.id
    });
  }

  addItem(){
    if(this.state.modelOpen == false)
      this.setState({modelOpen:true});
    else
      this.setState({modelOpen:false});

  }

  render() {
    let test = "Please log in"
    if(this.state.authenticated == true){
      test = <div><AddItemView state={this.state}/></div>
    }

    return (
      <div className="App">
      <div className="Login">
        <FacebookLogin
        appId="244487019290556"
        autoLoad={true}
        fields="name,email,picture"
        callback={(e) => this.pushResults(e)} />
         <button onClick={() => this.addItem()}>Post Item</button>
          <Modal isOpen = {this.state.modelOpen} contentLabel="Modal">
            {test}
            <div onClick={this.addItem}>
              Close
            </div>
          </Modal>
      </div>
      <ItemView state={this.state}/>
      </div>
    );
  }
}

export default App;
