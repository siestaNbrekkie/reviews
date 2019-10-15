import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    Axios.get('/reviews')
      .then(response => {
        console.log('this is data ', response.data[0])
        this.setState({
          data: response.data
        })
      })
  }


  render() {
    return (
      <div>
        <div>
          <h1 id="header">Reviews</h1>
          <div id="reviewAreaTop">
            <div id="starAndNumber">
              <div id="star">
              <span>&#9733;</span>
              </div>
              <div id="number">
                4.76
              </div>
            </div>
            <div id="borderBar">
            </div>
            <div id="numberOfReviews">
              <div id="reviewNum">
                247
              </div>
              <div id="reviewName">
                reviews
              </div>
            </div>
            <div id="searchReviews">
              <Search />
            </div>
          </div>
        </div>
        <div id="borderLine">
        </div>
        <div>
          <Ratings scores={this.state.data} />
        </div>
        <div>
          <ReviewList reviews={this.state.data} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));