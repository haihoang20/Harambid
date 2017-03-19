import React, { Component } from 'react';
import Item from './Item';
import Dropdown from 'react-dropdown'

class ItemView extends Component {
  constructor(props){
    super(props);
    this.state={
      authenticated:false,
      name:"null",
      email:"null",
      id:0
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      authenticated:nextProps.state.authenticated,
      name:nextProps.state.name,
      email:nextProps.state.email,
      id:nextProps.state.id
    });
  }

  render() {
    const Categories = [
          'one', 'two', 'three'
        ]

    const Locations = ['First', 'Second', 'Third']

    const defaultOption = Categories[0]

    let buyButton = null
    if(this.props.isAuthenticated == false)
        buyButton = <button> Please Login </button>
    else
        buyButton = <button> Buy Now </button>

    return (

      <div className="Combined">

        <div className="Filter">
          <Dropdown options={Categories} onChange={this._onSelect} value={"Select Category"} placeholder="Select an option" />
          <label>
            Price:
            <hr/>
          <input type="text" name="minPrice" value="minPrice"/>
          <hr/>
          <input type="text" name="maxPrice" />
          </label>
          <hr/>
            Duration:
            <hr/>
          <input type="text" name="Duration"/>

          <Dropdown options={Locations} onChange={this._onSelect} value={"Select Location"} placeholder="Select an option" />
          Views:
          <hr/>
          <input type="text" name="minViews"/>
          <hr/>
          <input type="text" name="maxViews" />
          <hr/>
          <input type="submit" value="Submit" />
        </div>

        <div className = "Listings">
            <Item waffles={123}/>
        </div>
      </div>
    );
  }
}

export default ItemView;
