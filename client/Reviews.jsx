import React from 'react';
import Axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import styles from './styles/AppStyle.css';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.backToAllReviews = this.backToAllReviews.bind(this);
    this.getPage = this.getPage.bind(this);

    this.state = {
      data: [],
      copyData: [],
      count: 0,
      pageReviews: [],
      search: '',
      searchActive: false,
      accuracy: 0,
      checkIn: 0,
      cleanliness: 0,
      communication: 0,
      location: 0,
      value: 0,
      perPage: 7,
      offset: 0,
      currentPage: 0
    };

    this.myDivToFocus = React.createRef();
  }

  getData() {
    console.log('getData has run')
    var parts = document.URL.split("/");
    var lastSegment = parts.pop() || parts.pop();

    Axios.get(`http://localhost:3003/${lastSegment}`)
      .then(response => {
        const pagData = response.data.data;
        const pagSlice = pagData.slice(this.state.offset, this.state.offset + this.state.perPage);
        console.log('this is pagSlice', pagSlice)
        
        this.setState({
          data: response.data.data,
          copyData: response.data.copyData,
          count: response.data.count,
          pageReviews: pagSlice,
          accuracy: response.data.accuracy,
          checkIn: response.data.checkIn,
          cleanliness: response.data.cleanliness,
          communication: response.data.communication,
          location: response.data.location,
          value: response.data.value,
          pageCount: Math.ceil(pagData.length / this.state.perPage),
          searchActive: false
        })
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
      });
  };

  getPage(num) {
    console.log(num.selected);
    const selectedPage = num.selected;
    const pageOffset = selectedPage * this.state.perPage;
    const dataCopy = this.state.data.slice();
    const slice = dataCopy.slice(pageOffset, pageOffset + this.state.perPage);

    this.setState({
      currentPage: selectedPage,
      offset: pageOffset,
      pageReviews: slice
    })
    if(this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  };

  componentDidMount() {
    this.getData();
  };

  allAverage(array) {
    if (array.length !== 0) {
      let count = 0;
      let divide = array.length * 6;

      array.map(obj => {
        for (var key in obj.ratings) {
          count += obj.ratings[key];
        }
      })

      return count / divide;
    } else {
      return 0;
    }
  };

  handleChange(event) {
    this.setState({
      search: event.target.value
    })
  };

  handleSubmit(event) {
    let result = [];
    let word = this.state.search;

    for (var i = 0; i < this.state.data.length; i++) {
      var temp = this.state.data[i];
      if (temp.guestReview.includes(word)) {
        result.push(temp);
      }
    }

    if (result.length > 7) {
      this.setState({
        data: result,
        pageReviews: result.slice(0, 7),
        searchActive: true,
        pageCount: Math.ceil(result.length / this.state.perPage),
        offset: 0,
        currentPage: 0
      })
    } else {
      this.setState({
        data: result,
        pageReviews: result,
        searchActive: true,
        pageCount: 1,
        offset: 0,
        currentPage: 0
      })
    }
    event.preventDefault();
    event.target.reset();
  };

  backToAllReviews() {
    return this.getData()
  }

  render() {
    if (this.state.data.length === 0 && this.searchActive === false) {
      return <div></div>
    } else {
      return (
        <div className={styles.body}>
          <div>
            <h1 className={styles.header}>Reviews</h1>
            <div className={styles.reviewAreaTop}>
              <div className={styles.starAndNumber}>
                <div className={styles.star}>
                  <span>&#9733;</span>
                </div>
                <div className={styles.number}>
                  {this.allAverage(this.state.copyData).toFixed(2)}
                </div>
              </div>
              <div className={styles.borderBar}>
              </div>
              <div className={styles.numberOfReviews}>
                <div className={styles.reviewNum}>
                  {this.state.count} {/*actaul number of reviews*/}
                </div>
                <div className={styles.reviewName}>
                  reviews
                </div>
              </div>
              <div className={styles.searchReviews}>
                <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className={styles.borderLine}>
          </div>
          <div>
            <Ratings scores={this.state.data} accuracy={this.state.accuracy} checkIn={this.state.checkIn} cleanliness={this.state.cleanliness} communication={this.state.communication} location={this.state.location} value={this.state.value} searchActive={this.state.searchActive} wordSearched={this.state.search} backButton={this.backToAllReviews} />
          </div>
          <div ref={this.myDivToFocus}></div>
          <div>
            <ReviewList reviews={this.state.pageReviews} clickNext={this.nextPageClick} clickPrevious={this.previousPageClick} />
          </div>
          <div className={styles.paginationSection}>
            <ReactPaginate 
              previousLabel={<FontAwesomeIcon icon={faChevronLeft} size="lg" className={styles.leftChevron} />}
              nextLabel={<FontAwesomeIcon icon={faChevronRight} size="lg" className={styles.rightChevron} />}
              breakLabel={"..."}
              breakClassName={styles.break}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={this.getPage}
              containerClassName={styles.pagination}
              pageClassName={styles.pagLi}
              subContainerClassName={"pages pagination"}
              activeClassName={styles.active}
              nextClassName={styles.next}
              previousClassName={styles.previous}
            />
          </div>
        </div>
      )
    }
  }
}

export default Reviews;