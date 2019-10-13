import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reviews = this.props.reviews;
    return(
      <div>
        {reviews.map((review) =>
          <ReviewListItem
          key={review.guestName}
          value={review}
          />
        )}
      </div>
    )
  }
}

export default ReviewList;