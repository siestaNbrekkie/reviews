import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import styles from './styles/AppStyle.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.nextPageClick = this.nextPageClick.bind(this);
    this.previousPageClick = this.previousPageClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.backToAllReviews = this.backToAllReviews.bind(this);

    this.state = {
      data: [],
      copyData: [],
      count: 0,
      pageReviews: [],
      search: '',
      searchActive: false
    };
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    var parts = document.URL.split("/");
    var lastSegment = parts.pop() || parts.pop();

    Axios.get(`http://localhost:3003/${lastSegment}`)
      .then(response => {
        console.log('this is data ', response.data)
        this.setState({
          data: response.data,
          copyData: response.data,
          count: response.data.length,
          pageReviews: response.data.slice(0, 7)
        })
      })
      .catch(err => { // did not handle possible errors before
        console.error("error in setting state")
      });
  };

  allAverage(array) {
    let count = 0;
    let divide = array.length * 6;

    array.map(obj => {
      for (var key in obj.ratings) {
        count += obj.ratings[key];
      }
    })

    return count / divide;
  };

  nextPageClick() {
    let list = this.state.pageReviews;
    let length = list.length - 1;
    let lastReview = list[length];
    let lastReviewNum = lastReview.reviewNum;
    let start;
    let result = [];
    if (list.length === 7) { // prevents nextPageClick from rendering a blank page if at the end of total list of reviews
      for (var i = 0; i < this.state.data.length; i++) {
        var temp = this.state.data[i];
        if (temp.reviewNum === lastReviewNum) {
          if ((i + 7) < (this.state.data.length - 1)) {
            start = i + 1;
            let end = start + 7;

            while (start < end) {
              result.push(this.state.data[start])
              start++;
            };

            this.setState({
              pageReviews: result
            })
            break;
          } else {
            for (var j = i + 1; j < this.state.data.length; j++) {
              result.push(this.state.data[j])
            }
            this.setState({
              pageReviews: result
            })
            break;
          }
        }
      };
    }



  };

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
        start--;
      };

      this.setState({
        pageReviews: result
      })
    }

  };

  handleChange(event) {
    this.setState({
      search: event.target.value
    })
  };

  handleSubmit(event) {
    let result = [];
    let word = this.state.search;

    for (var i = 0; i < this.state.data.length; i++) {
      var temp = this.state.data[i];
      if (temp.guestReview.includes(word)) {
        result.push(temp);
      }
    }

    console.log('this is data after search ', result)

    if (result.length > 7) {
      this.setState({
        data: result,
        pageReviews: result.slice(0, 7),
        searchActive: true
      })
    } else {
      this.setState({
        data: result,
        pageReviews: result,
        searchActive: true
      })
    }

    event.preventDefault();
  };

  backToAllReviews() {
    let originalData = this.state.copyData;

    this.setState({
      data: originalData,
      searchActive: false,
      pageReviews: originalData.slice(0, 7)
    })

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
                <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className={styles.borderLine}>
          </div>
          <div>
            <Ratings scores={this.state.data} searchActive={this.state.searchActive} wordSearched={this.state.search} backButton={this.backToAllReviews} />
          </div>
          <div>
            <ReviewList reviews={this.state.pageReviews} clickNext={this.nextPageClick} clickPrevious={this.previousPageClick} />
          </div>
        </div>
      )
    }
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));

export default Reviews;