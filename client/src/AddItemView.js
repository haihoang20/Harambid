import React, { Component } from 'react';
import Item from './Item';

class AddItemView extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            maxPrice:"",
            minPrice:""

        }
    }

    AddItem = () => {
        alert(this.state.name);
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }


  render() {
    var name = '';
    return (
      <div className = "completeItem">
          <div className="Add your item">
          <form onSubmit={this.AddItem}>
            <h2>
            Name:
            <input type="text" name="name" onChange={(e) => this.handleNameChange(e)} />
            </h2>
            <h2>
            Max price:
                <input type="text" name="maxPrice" />
            </h2>
            <h2>
            Min Price:
                <input type="text" name="minPrice" />
            </h2>
            <h2>
            Duration:
                <input type="text" name="duration" />
            </h2>
            <h2>
            Categories:
                <input type="text" name="categories" />
            </h2>
            <h2>
            Description:
                <input type="text" name="description" />
            </h2>
            <h2>
            Shipping Cost:
                <input type="text" name="shippingCost" />
            </h2>
            <h2>
            Location:
                <select>
                <option value="-"> - </option>
                <option value="ca">Canada</option>
                <option value="us">USA</option>
                </select>
            </h2>
            </form>
            <button onClick={this.AddItem}>
                AddItem
            </button>
          </div>
      </div>
    );
  }
}

export default AddItemView;
