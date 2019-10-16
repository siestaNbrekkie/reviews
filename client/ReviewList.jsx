import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import styles from './styles/reviewListStyle.css'

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reviews = this.props.reviews;
    return(
      <ul className={styles.unorderedList}>
        {reviews.map((review) =>
          <ReviewListItem
          key={review.guestName}
          value={review}
          />
        )}
      </ul>
    )
  }
}

export default ReviewList;