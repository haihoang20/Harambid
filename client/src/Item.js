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
    // TODO: Change Start Time to props.stte.StartTime once DataBase Stores actual
    //       StartTime
    this.state={
      visible:false,
      authenticated: props.state.authenticated,
      StartPrice: props.state.StartPrice,
      Id: props.state.Id,
      Name: props.state.Name,
      Duration: props.state.Duration,
      Description: props.state.Description,
      Location: props.state.Location,
      Views: props.state.Num_Views,
      MinPrice:props.state.MinPrice,
      StartTime: props.state.StartTime,
      Pictures: props.state.Pictures,
      Availability: props.state.Availibility,
      CurrenPrice: props.state.CurrenPrice,
      buttonMessage:"Please Login to Purchase"
    }
  }

  componentDidMount() {

    var date = new Date();
    var CurrentTime = date.getTime();
    //var CurrentPrice = ((CurrentTime - this.props.StartTime)/this.props.Duration) * this.props.StartPrice;
    // Assuming StartTime and Duration is in MIlliseconds
    this.setState({
      visible:false,
      authenticated: this.props.state.authenticated,
      StartPrice:this.props.state.StartPrice,
      Id: this.props.state.Id,
      Name: this.props.state.Name,
      Duration: this.props.Duration,
      Description: this.props.Description,
      Location: this.props.Location,
      Views: this.props.Num_Views,
      MinPrice: this.props.MinPrice,
      StartTime: this.props.StartTime,
      Pictures: this.props.Pictures,
      Availability: this.props.Availibility,
      CurrentPrice: this.props.CurrentPrice,
      buttonMessage:"Please Login to Purchase"
      }
    );
  }

    setVisable(){
        if(this.state.visible == false)
            this.setState({visible: true});
        else
            this.setState({visible: false});
    }

    render() {
        let buyButton = null

        if(this.state.authenticated == false)
            buyButton = <button> Please Login to Purchase</button>
        else
            buyButton = <button> Buy Now </button>

        return (
            <div className="itemContainer">

              <div className="miniItemBox" onClick={() => this.setVisable()}>
                <div className="eyeImage">
                  <img src={EyeIcon}/> {this.state.Views}
                </div>

                <div className="miniImage">
                  <img src={this.state.Pictures} />
                </div>


                <h2>
                    {this.state.Id}
                </h2>

                <h2>
                    {this.state.Duration}

                </h2>


                <h2>

                  <div className="maxPriceItem">
                    CDN$ {this.state.CurrentPrice}
                  </div>
                </h2>

                {buyButton}
              </div>


              <Modal isOpen = {this.state.visible} style={customStyles} contentLabel="Modal">

                <div className="completeItem">

                  <div className="itemIcon">
                    <img src={this.state.Pictres} />
                  </div>
                  <div className="itemDescription">

                    <div className="closeText" onClick={() => this.setVisable()}>
                      <button type="button" className="close" aria-hidden="true" onClick={this.props.onRequestHide}>&times;</button>
                    </div>
                    <h2>
                        {this.state.Name}
                    </h2>
                    <h2>
                      Time Left: {this.state.Duration}
                    </h2>
                    <h2>
                      Total Views: {this.state.Views}
                    </h2>
                    <h2>
                      <div className="maxPriceItem">
                        Price: CDN$ {this.state.StartPrice}
                      </div>
                    </h2>
                    <h2>
                      Shipping: {this.state.Shipping}
                    </h2>

                  </div>

                  <h2>
                    <div className="itemDescFont">
                      Description:
                    </div>
                  </h2>
                  <h2>
                      {this.state.Description}
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
