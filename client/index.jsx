import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import styles from './styles/indexStyle.css';



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
    var parts = document.URL.split("/");
    var lastSegment = parts.pop() || parts.pop();

    Axios.get(`http://localhost:3000/${lastSegment}`)
      .then(response => {
        console.log('this is data ', response.data)
        this.setState({
          data: response.data
        })
      })
  }


  render() {
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
                4.76
              </div>
            </div>
            <div className={styles.borderBar}>
            </div>
            <div className={styles.numberOfReviews}>
              <div className={styles.reviewNum}>
                247
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
          <ReviewList reviews={this.state.data} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));