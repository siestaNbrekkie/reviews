
import React from 'react';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="ratings">
        <div id="ratingsLeft">
          <div id="checkIn">
            Check-in
            <div id="pbCheckin">
              <progress max="5" value="4.5"></progress>
                <div id="pbNum">
                  4.5
                </div>
            </div>
          </div>
          <div id="accuracy">
            Accuracy
            <div id="pbAccuracy">
              <progress max="5" value="4.5"></progress>
              <div id="pbNum">
                4.5
              </div>
            </div>
          </div>
          <div id="cleanliness">
            Cleanliness
            <div id="pbCleanliness">
              <progress max="5" value="4.5"></progress>
              <div id="pbNum">
                4.5
              </div>
            </div>
          </div>
        </div>
        <div id="ratingsRight">
          <div id="communication">
            Communication
            <div id="pbCommunication">
              <progress max="5" value="4.5"></progress>
              <div id="pbNum">
                4.5
              </div>
            </div>
          </div>
          <div id="location">
            Location
            <div id="pbLocation">
              <progress max="5" value="4.5"></progress>
              <div id="pbNum">
                4.5
              </div>
            </div>
          </div>
          <div id="value">
            Value
            <div id="pbValue">
              <progress max="5" value="4.5"></progress>
              <div id="pbNum">
                4.5
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ratings;