import React, { Component } from 'react';
import Grid from 'react-infinite-grid';
import Modal from 'react-modal';

class Item extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.waffles);
    this.state={
      visible: false,
      waffles: this.props.waffles
    }
  }

  setVisable(){
    console.log(this.state.waffles);
    if(this.state.visible == false)
      this.setState({visible: true});
    else
      this.setState({visible: false});
  }

  render() {
    let buyButton = null

    if(this.props.isAuthenticated == false)
        buyButton = <button> Please Login to Purchase</button>
    else
        buyButton = <button> Buy Now </button>

    return (
      <div>

      <div className="miniItemBox" onClick={() => this.setVisable()}>

      <div className="miniImage">
        <img src={this.props.imgSource} />
      </div>
            <h2>
            {this.props.name}
            </h2>

            <h2>
            {this.props.maxPrice}
            </h2>

            <h2>
            {this.props.duration}
            </h2>
            {buyButton}
      </div>


      <Modal isOpen = {this.state.visible} contentLabel="Modal">

      <div className="completeItem">

        <div className="itemIcon">
          <img src={this.props.imgSource} />
        </div>
          <div className="itemDescription">

            <div className="closeText" onClick={() => this.setVisable()}>
              Close
            </div>

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
      </Modal>
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
  isAuthenticated: false,
  memberID: 666
}

export default Item;