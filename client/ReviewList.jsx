import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reviews = this.props.reviews;
    return(
      <ul id="unorderedList">
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