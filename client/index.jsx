import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'hello'
    };
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    Axios.get('/hi')
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
        <ReviewList {this.state.data}/>
        {/* {this.state.data[0].hostName} */}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));