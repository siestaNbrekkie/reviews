import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import styles from './styles/AppStyle.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.nextPageClick = this.nextPageClick.bind(this);
    this.previousPageClick = this.previousPageClick.bind(this);

    this.state = {
      data: [],
      count: 0,
      pageReviews: []
    };
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    var parts = document.URL.split("/");
    var lastSegment = parts.pop() || parts.pop();

    Axios.get(`http://localhost:3000/${lastSegment}`)
      .then(response => {
        console.log('this is data ', response.data)
        this.setState({
          data: response.data,
          count: response.data.length,
          pageReviews: response.data.slice(0, 7)
        })
      })
  }

  allAverage(array) {
    let count = 0;
    let divide = array.length * 6;

    array.map(obj => {
      for (var key in obj.ratings) {
        count += obj.ratings[key];
      }
    })

    return count / divide;
  }

  nextPageClick() {
    let list = this.state.pageReviews;
    let length = list.length - 1;
    let lastReview = list[length];
    let lastReviewNum = lastReview.reviewNum;
    let start;
    for (var i = 0; i < this.state.data.length; i++) {
      var temp = this.state.data[i];
      if (temp.reviewNum === lastReviewNum) {
        start = i + 1;
      }
    };

    let end = start + 7;
    let result = [];
    while (start < end) {
      result.push(this.state.data[start])
      start++;
    };

    this.setState({
      pageReviews: result
    })

  }

  previousPageClick() {
    let list = this.state.pageReviews;
    let firstReview = list[0];
    let firstReviewNum = firstReview.reviewNum;
    let start;

    for (var i = 0; i < this.state.data.length; i++) {
      var temp = this.state.data[i];
      if (temp.reviewNum === firstReviewNum) {
        if (i === 0) {
          start = 0;
          break;
        }
        start = i - 1;
      }
    };

    if (start !== 0) {
      let end = start - 7;
      let result = [];

      while (start > end) {
        result.unshift(this.state.data[start]);
        start --;
      };

      this.setState({
        pageReviews: result
      })
    }

  }

  render() {
    if (this.state.data.length === 0) {
      return <div></div>
    } else {
      return (
        <div className={styles.body}>
          <div>
            <h1 className={styles.header}>Reviews</h1>
            <div className={styles.reviewAreaTop}>
              <div className={styles.starAndNumber}>
                <div className={styles.star}>
                  <span>&#9733;</span>
                </div>
                <div className={styles.number}>
                  {this.allAverage(this.state.data).toFixed(2)}
                </div>
              </div>
              <div className={styles.borderBar}>
              </div>
              <div className={styles.numberOfReviews}>
                <div className={styles.reviewNum}>
                  {this.state.count} {/*actaul number of reviews*/}
                </div>
                <div className={styles.reviewName}>
                  reviews
                </div>
              </div>
              <div className={styles.searchReviews}>
                <Search />
              </div>
            </div>
          </div>
          <div className={styles.borderLine}>
          </div>
          <div>
            <Ratings scores={this.state.data} />
          </div>
          <div>
            <ReviewList reviews={this.state.pageReviews} clickNext={this.nextPageClick} clickPrevious={this.previousPageClick}/>
          </div>
        </div>
      )
    }
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));

export default App;