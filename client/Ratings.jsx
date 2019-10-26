
import React from 'react';
import styles from './styles/ratingsStyle.css';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  // getAverage(array, key) {
  //   if (array.length !== 0) {
  //     let total = 0;
  //     const arrLength = array.length
  //     array.map(obj => {
  //       total += obj.ratings[key]
  //     })
  //     return total/arrLength;
  //   } else {
  //     return 0;
  //   }
  // }

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
                <progress max="5" value={this.props.checkIn}></progress>
                  <div className={styles.pbNum}>
                    {this.props.checkIn}
                  </div>
              </div>
            </div>
            <div className={styles.accuracy}>
            <div className={styles.descriptionL}>
              Accuracy
              </div>
              <div className={styles.pbAccuracy}>
                <progress max="5.0" value={this.props.accuracy}></progress>
                <div className={styles.pbNum}>
                {this.props.accuracy}
                </div>
              </div>
            </div>
            <div className={styles.cleanliness}>
            <div className={styles.descriptionL}>
              Cleanliness
              </div>
              <div className={styles.pbCleanliness}>
                <progress max="5" value={this.props.cleanliness}></progress>
                <div className={styles.pbNum}>
                {this.props.cleanliness}
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
                <progress max="5" value={this.props.communication}></progress>
                <div className={styles.pbNum}>
                {this.props.communication}
                </div>
              </div>
            </div>
            <div className={styles.location}>
            <div className={styles.descriptionR}>
              Location
              </div>
              <div className={styles.pbLocation}>
                <progress max="5" value={this.props.location}></progress>
                <div className={styles.pbNum}>
                {this.props.location}
                </div>
              </div>
            </div>
            <div className={styles.value}>
              <div className={styles.descriptionR}>
              Value
              </div>
              <div className={styles.pbValue}>
                <progress max="5" value={this.props.value}></progress>
                <div className={styles.pbNum}>
                {this.props.value}
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