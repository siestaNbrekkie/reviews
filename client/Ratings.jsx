
import React from 'react';
import styles from './styles/ratingsStyle.css';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  getAverage(array, key) {
    let total = 0;
    const arrLength = array.length
    array.map(obj => {
      total += obj.ratings[key]
    })
    return total/arrLength;
  }

  render() {
    return (
      <div className={styles.ratings}>
        <div className={styles.ratingsLeft}>
          <div className={styles.checkIn}>
            <div className={styles.descriptionL}>
            Check-in
            </div>
            <div className={styles.pbCheckin}>
              <progress max="5" value={this.getAverage(this.props.scores, 'checkIn')}></progress>
                <div className={styles.pbNum}>
                  {this.getAverage(this.props.scores, 'checkIn').toFixed(1)}
                </div>
            </div>
          </div>
          <div className={styles.accuracy}>
          <div className={styles.descriptionL}>
            Accuracy
            </div>
            <div className={styles.pbAccuracy}>
              <progress max="5.0" value={this.getAverage(this.props.scores, 'accuracy')}></progress>
              <div className={styles.pbNum}>
              {this.getAverage(this.props.scores, 'accuracy').toFixed(1)}
              </div>
            </div>
          </div>
          <div className={styles.cleanliness}>
          <div className={styles.descriptionL}>
            Cleanliness
            </div>
            <div className={styles.pbCleanliness}>
              <progress max="5" value={this.getAverage(this.props.scores, 'cleanliness')}></progress>
              <div className={styles.pbNum}>
              {this.getAverage(this.props.scores, 'cleanliness').toFixed(1)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ratingsRight}>
          <div className={styles.communication}>
          <div className={styles.descriptionR}>
            Communication
            </div>
            <div className={styles.pbCommunication}>
              <progress max="5" value={this.getAverage(this.props.scores, 'communication')}></progress>
              <div className={styles.pbNum}>
              {this.getAverage(this.props.scores, 'communication').toFixed(1)}
              </div>
            </div>
          </div>
          <div className={styles.location}>
          <div className={styles.descriptionR}>
            Location
            </div>
            <div className={styles.pbLocation}>
              <progress max="5" value={this.getAverage(this.props.scores, 'location')}></progress>
              <div className={styles.pbNum}>
              {this.getAverage(this.props.scores, 'location').toFixed(1)}
              </div>
            </div>
          </div>
          <div className={styles.value}>
            <div className={styles.descriptionR}>
            Value
            </div>
            <div className={styles.pbValue}>
              <progress max="5" value={this.getAverage(this.props.scores, 'value')}></progress>
              <div className={styles.pbNum}>
              {this.getAverage(this.props.scores, 'value').toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ratings;