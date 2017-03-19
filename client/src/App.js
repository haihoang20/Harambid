import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import AddItemView from './AddItemView';
import ItemView from './ItemView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItemView/>
      </div>
    );
  }
}

export default App;
