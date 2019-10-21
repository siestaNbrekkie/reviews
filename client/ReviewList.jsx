import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import styles from './styles/reviewListStyle.css'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reviews = this.props.reviews;
    return (
      <div>
        <ul className={styles.unorderedList}>
          {reviews.map((review) =>
            <ReviewListItem
              key={review.guestName}
              value={review}
            />
          )}
        </ul>
        <div className={styles.buttonContainer}>
          <div className={styles.chevronHolder}>
            <button onClick={this.props.clickPrevious}>
              <div>
                <FontAwesomeIcon icon={faChevronLeft} size="lg" className={styles.leftChevron} />
              </div>
            </button>
          </div>
          {/* <div className={styles.numberButton}>
            <button> 1 </button>
          </div>
          <div className={styles.numberButton}>
            <button> 2 </button>
          </div>
          <div className={styles.numberButton}>
            <button> 3 </button>
          </div>
          <div className={styles.numberButton}>
            <button> 4 </button>
          </div>
          <div className={styles.numberButton}>
            <button> 5 </button>
          </div> */}
          <div className={styles.chevronHolder}>
            <button onClick={this.props.clickNext}>
              <div>
                <FontAwesomeIcon icon={faChevronRight} size="lg" className={styles.rightChevron} />
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewList;