import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const reviewItem = this.props.value
    console.log('this is review item in ReviewListItem ',{reviewItem})
    //const item = reviewItem.map()
    return(
      <div>
        <div id="reviewContainer">
          <div id="review">
            {/* <div> */}
              <div id="guestImageCont">
                <img id="guestImage" src={reviewItem.guestImage} />
                <div id="guestDetail">
                  <div id="guestName">
                    {reviewItem.guestName}
                  </div>
                  <div id='guestDate'>
                    {reviewItem.date}
                  </div>
                </div>
              </div>
            {/* </div> */}
            <div id='guestReview'>
              {reviewItem.guestReview}
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default ReviewListItem;