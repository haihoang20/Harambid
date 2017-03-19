import React, { Component } from 'react';
import Grid from 'react-infinite-grid';
import StarRating from 'react-star-rating';
import ProfileImg from './ProfileImg.jpg';
import Avatar from 'react-avatar';

class Profile extends Component {
    render() {

        return (
            <div className = "completeProfile">
            {/*With Avatar class can do cool stuff like automatically parse from facebook/google https://github.com/sitebase/react-avatar*/}
              <div className="profileAvatar">
                <Avatar size="300" round={true} src={this.props.imgSource} />
              </div>
              <div className="rate">
                Ratings:
              </div>
              <div className="ratings">
                <form action="/api" method="POST">
                  <StarRating name="seller-rating" disabled={true} editing={false} rating={starRating} totalStars={5} />
                </form>

                <div className="profileDescription">
                  <h2>
                      {this.props.firstName} {this.props.lastName}
                  </h2>
                </div>
                <h2>
                    {this.props.locationCity}, {this.props.locationCountry}
                </h2>
              </div>

            </div>
        );
    }
}
let numberOfRatings= 499;
let city = "Vancouver";
let country = "Canada";
let starRating = 4;
let rati = 4;

Profile.defaultProps= {
  // TODO Change ProfileImg to be dynamic
    imgSource: ProfileImg,
    firstName: "Harambe",
    lastName: "Smith",
    ratings: numberOfRatings,
    locationCity: city,
    locationCountry: country
}

export default Profile;