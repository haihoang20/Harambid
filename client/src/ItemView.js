import React, { Component } from 'react';

class ItemView extends Component {
  render() {
    
    let buyButton = null
    if(this.props.isAuthenticated == false)
        buyButton = <button> Please Login </button>
    else
        buyButton = <button> Buy Now </button>

    return (
      <div className = "completeItem">
        <div className="itemIcon">
          <img src={this.props.imgSource} />
        </div>
          <div className="itemDescription">
            <h2>
            {this.props.name}
            </h2>
            <h2>
            {this.props.maxPrice}
            </h2>
            <h2>
            {this.props.minPrice}
            </h2>
            <h2>
            {this.props.maxPrice}
            </h2>
            <h2>
            {this.props.duration}
            </h2>
            <h2>
            {this.props.description}
            </h2>
            {this.props.shippingCost}
          </div>
          {buyButton}
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

export default ItemView;