import React from 'react';
import styles from './styles/searchStyle.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <form className={styles.searchBox} >
          <input type="text"/>
        </form>
      </div>
    )
  }
}

export default Search;