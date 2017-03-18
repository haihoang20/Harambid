import React, { Component } from 'react';
import Item from './Item';

class AddItemView extends Component {
  render() {
    let addButton = <button> Add Item </button>
    return (
      <div className = "completeItem">
          <div className="Add your item">
            <h2>
            Name:
                <input type="text" name="name" />
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
          </div>
          {addButton}
      </div>
    );
  }
}


Item.defaultProps = {
  imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaRLHSecd1nSWMD_1uEj8ooMq2R1CzAYNg58yJrKD2wXQ3-tUsNOM4NU",
  name: "null",
  maxPrice: 9999,
  minPrice: 99,
  duration: 123,
  categories: [],
  description: "Description Here",
  shippingCost: 123,
  isAuthenticated: false
}


export default AddItemView;
