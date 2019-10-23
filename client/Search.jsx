import React from 'react';
import styles from './styles/searchStyle.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form className={styles.searchBox} onSubmit={this.props.handleSubmit} >
          <FontAwesomeIcon icon={faSearch} size="sm" className={styles.mag}/>
          <input type="text" placeholder="Search reviews"  onChange={this.props.handleChange}/>
        </form>
      </div>
    )
  }
}

export default Search;