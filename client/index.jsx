import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ReviewList from './ReviewList.jsx';



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
        console.log('this is data ', response.data)
        this.setState ({
          data: response.data
        })
      })
  }


  render() {
    return (
      <div>
        <h1 id="header">Reviews</h1>
        <div>
          <ReviewList reviews={this.state.data}/>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));