import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <form id="searchBox" >
          <input type="text"/>
        </form>
      </div>
    )
  }
}

export default Search;