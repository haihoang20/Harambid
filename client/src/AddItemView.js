import React, { Component } from 'react';

class AddItemView extends Component {
    constructor(props){
        super(props);
        // TODO: add member Id
        this.state={
            memberID: 1,
            imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaRLHSecd1nSWMD_1uEj8ooMq2R1CzAYNg58yJrKD2wXQ3-tUsNOM4NU",
            name: "",
            maxPrice:'',
            minPrice:'',
            duration:'',
            categories:[],
            description:"",
            shippingCost:'',
            location:"",
            isAuthenticated:"",
        }
    }

    AddItem = () => {
        /*
        fetch('/api/food?q=hash+browns', {
                accept: 'application/json',
 })
 */
        if (this.state.name === '' ||
            this.state.maxPrice === '' ||
            this.state.minPrice === '' ||
            this.state.duration === '' ||
            this.state.location === ''){
            alert("Fields must be occupied");
        }
        else if (isNaN(this.state.duration)
                || isNaN(this.state.minPrice)
                || isNaN(this.state.maxPrice)
                || isNaN(this.state.shippingCost)){
            alert("Max Price, Min Price, Duration and Shipping Cost must be number")
        }
        else if (this.state.minPrice <= 0 || this.state.maxPrice <= 0 ||
                this.state.duration <= 0 || this.state.shippingCost <= 0){
            alert("Max Price, Min Price, Duration and Shipping Cost must be more than 0")
        }

        else if(this.state.minPrice >= this.state.maxPrice){
            alert("Min price" + this.state.minPrice + "must be lower than max price" + this.state.maxPrice);
        }
        else {

            // alert("Name " + this.state.name
            //     + "MaxPrice " + this.state.maxPrice
            //     + "MinPrice " + this.state.minPrice
            //     + "Duration " + this.state.duration
            //     + "Categories " + this.state.categories
            //     + "Description " + this.state.description
            //     + "ShippingCost " + this.state.shippingCost
            //     + "Location " + this.state.location);

            this.state.isAuthenticated = true;
            var stateData = this.state;
            var data = new FormData();
            fetch('/api/item/addItem', {
                headers: {
                    'Content-Type': 'application/json'
                },
              accept: 'application/json',
              method: "POST",
              body: JSON.stringify( this.state )
            });
        }
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleMaxPriceChange(e){
        this.setState({
            maxPrice: e.target.value
        });
    }

    handleMinPriceChange(e){
        this.setState({
            minPrice: e.target.value
        });
    }

    handleDurationChange(e){
        this.setState({
            duration: e.target.value
        });
    }

    handleCategoriesChange(e){
        this.setState({
            categories: e.target.value
        });
    }

    handleDescriptionChange(e){
        this.setState({
            description: e.target.value
        });
    }

    handleShippingCostChange(e){
        this.setState({
            shippingCost: e.target.value
        });
    }

    handleLocationChange(e){
        this.setState({
            location: e.target.value
        });
    }


  render() {
    var name = '';
    return (
      <div className = "completeItem">
          <div className="Add your item">
          <form onSubmit={() => this.AddItem()}>
            <h2>
            Name:
            <input type="text" name="name" onChange={(e) => this.handleNameChange(e)} />
            </h2>
            <h2>
            Max price:
                <input type="text" name="maxPrice" onChange={(e) => this.handleMaxPriceChange(e)}/>
            </h2>
            <h2>
            Min Price:
                <input type="text" name="minPrice" onChange={(e) => this.handleMinPriceChange(e)}/>
            </h2>
            <h2>
            Duration:
                <input type="text" name="duration" onChange={(e) => this.handleDurationChange(e)}/>
            </h2>
            <h2>
            Categories:
                <select onChange={(e) => this.handleCategoriesChange(e)}>
                <option value="-"> - </option>
                <option value="cars and motors">Card and Motors</option>
                <option value="sports, leisure and games">Sports, Leisure and Games</option>
                <option value="home and garden">Home and Garden</option>
                <option value="fashion and accessories">Fashion and Accessories</option>
                <option value="baby and child">Baby and Child</option>
                <option value="movie, books and music">Movie, Books and Music</option>
                <option value="other">Other</option>
                </select>
            </h2>
            <h2>
            Description:
                <textarea name="body"
                    onChange={(e) => this.handleDescriptionChange(e)}/>
            </h2>
            <h2>
            Shipping Cost:
                <input type="text" name="shippingCost" onChange={(e) => this.handleShippingCostChange(e)}/>
            </h2>
            <h2>
            Location:
                <select onChange={(e) => this.handleLocationChange(e)}>
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
