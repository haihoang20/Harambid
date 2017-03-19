import React, { Component } from 'react';
import Grid from 'react-infinite-grid';
import Modal from 'react-modal';
import EyeIcon from './EyeIcon.svg';

const customStyles = {
    overlay : {
        right                 : '50%',
    }
};

class Item extends Component {



  constructor(props) {
    super(props);
    this.state={
      visible: false,
      authenticated:props.state.authenticated,
      name:props.state.name,
      email:props.state.email,
      id:props.state.id,
      buttonMessage:"Please Login to Purchase"
    }
  }

    setVisable(){
        if(this.state.visible == false)
            this.setState({visible: true});
        else
            this.setState({visible: false});
    }

    render() {
        let buyButton = null

        if(this.props.authenticated == false)
            buyButton = <button> Please Login to Purchase</button>
        else
            buyButton = <button> Buy Now </button>

        return (
            <div className="haiTest">

              <div className="miniItemBox" onClick={() => this.setVisable()}>
                <div className="eyeImage">
                  <img src={EyeIcon}/> {this.props.totalViews}
                </div>

                <div className="miniImage">
                  <img src={this.props.imgSource} />
                </div>


                <h2>
                    {this.props.name}
                </h2>

                <h2>
                    {this.props.duration}m

                </h2>


                <h2>

                  <div className="maxPriceItem">
                    CDN$ {this.props.maxPrice}
                  </div>

                </h2>

                {buyButton}
              </div>


              <Modal isOpen = {this.state.visible} style={customStyles} contentLabel="Modal">

                <div className="completeItem">

                  <div className="itemIcon">
                    <img src={this.props.imgSource} />
                  </div>
                  <div className="itemDescription">

                    <div className="closeText" onClick={() => this.setVisable()}>
                      <button type="button" className="close" aria-hidden="true" onClick={this.props.onRequestHide}>&times;</button>
                    </div>
                    <h2>
                        {this.props.name}
                    </h2>
                    <h2>
                      Time Left: {this.props.duration}m
                    </h2>
                    <h2>
                      Total Views: {this.props.totalViews}
                    </h2>
                    <h2>
                      <div className="maxPriceItem">
                        Price: CDN$ {this.props.maxPrice}
                      </div>
                    </h2>
                    <h2>
                      Shipping: {this.props.shippingCost}
                    </h2>

                  </div>

                  <h2>
                    <div className="itemDescFont">
                      Description:
                    </div>
                  </h2>
                  <h2>
                      {this.props.description}
                  </h2>
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
    maxPrice: 9999.99,
    minPrice: 99,
    duration: 55,
    totalViews: 101,
    categories: [],
    description: "Description Here of how Fiiiiiine the product is!",
    shippingCost: "FREE Standard Shipping",
    isAuthenticated: false,
    memberID: 666

}

export default Item;
