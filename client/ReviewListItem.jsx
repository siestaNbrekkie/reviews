import React from 'react';
const moment = require('moment');
import styles from './styles/reviewListItem.css';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const reviewItem = this.props.value
    // console.log('this is review item in ReviewListItem ', { reviewItem })
    //const item = reviewItem.map()
    return (
      <li className={styles.listItem}>
      {/* className="styles.listItem" */}
        <div className={styles.reviewContainer}>
          <div className={styles.review}>
            <div className={styles.guestImageCont}>
              <img className={styles.guestImage} src={reviewItem.guestImage} />
              <div className={styles.guestDetail}>
                <div className={styles.guestName}>
                  {reviewItem.guestName}
                </div>
                <div className={styles.guestDate}>
                  {moment(reviewItem.date).format("MMMM YYYY")}
                </div>
              </div>
            </div>
            <div className={styles.guestReview}>
              {reviewItem.guestReview}
            </div>
          </div>
        </div>
      </li>


    )
  }
}

export default ReviewListItem;