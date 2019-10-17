
import React from 'react';
import styles from './styles/ratingsStyle.css';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.ratings}>
        <div className={styles.ratingsLeft}>
          <div className={styles.checkIn}>
            Check-in
            <div className={styles.pbCheckin}>
              <progress max="5" value="4.5"></progress>
                <div className={styles.pbNum}>
                  4.5
                </div>
            </div>
          </div>
          <div className={styles.accuracy}>
            Accuracy
            <div className={styles.pbAccuracy}>
              <progress max="5.0" value="4.5"></progress>
              <div className={styles.pbNum}>
                4.5
              </div>
            </div>
          </div>
          <div className={styles.cleanliness}>
            Cleanliness
            <div className={styles.pbCleanliness}>
              <progress max="5" value="4.5"></progress>
              <div className={styles.pbNum}>
                4.5
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ratingsRight}>
          <div className={styles.communication}>
            Communication
            <div className={styles.pbCommunication}>
              <progress max="5" value="4.5"></progress>
              <div className={styles.pbNum}>
                4.5
              </div>
            </div>
          </div>
          <div className={styles.location}>
            Location
            <div className={styles.pbLocation}>
              <progress max="5" value="4.5"></progress>
              <div className={styles.pbNum}>
                4.5
              </div>
            </div>
          </div>
          <div className={styles.value}>
            Value
            <div className={styles.pbValue}>
              <progress max="5" value="4.5"></progress>
              <div className={styles.pbNum}>
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