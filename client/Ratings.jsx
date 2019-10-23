
import React from 'react';
import styles from './styles/ratingsStyle.css';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  getAverage(array, key) {
    if (array.length !== 0) {
      let total = 0;
      const arrLength = array.length
      array.map(obj => {
        total += obj.ratings[key]
      })
      return total/arrLength;
    } else {
      return 0;
    }
  }

  render() {
    if (!this.props.searchActive) { // if search is not active, display the ratings
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
    } else { // if search is active make ratings disappear and show how many guests have mentioned the word that was put into search and show a button to bring back to all reviews
      let currentData = this.props.scores;
      if (currentData.length === 0) { // if the search results yield no matches render this
        return (
          <div className={styles.mentionedWord}>
            <div className={styles.numberOfGuests}>
              {`${currentData.length} guests have mentioned`}
            </div>
            <div className={styles.wordSearched}>
                {`"${this.props.wordSearched}"`}
            </div>
            <div className={styles.backButton}>
              <button className={styles.button} onClick={this.props.backButton}> Back to all reviews</button>
            </div>
          </div>
        )
      } else {
        return (
          <div className={styles.mentionedWord}>
            <div className={styles.numberOfGuests}>
              {`${currentData.length} guests have mentioned`}
            </div>
            <div className={styles.wordSearched}>
                {`"${this.props.wordSearched}"`}
            </div>
            <div className={styles.backButton}>
              <button className={styles.button} onClick={this.props.backButton}> Back to all reviews</button>
            </div>
          </div>
        )
      }
    }
  }
}

export default Ratings;