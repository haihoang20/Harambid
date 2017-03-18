import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import AddItemView from './AddItemView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Item/>
        <AddItemView/>
      </div>
    );
  }
}

export default App;
