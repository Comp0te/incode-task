import React, { Component } from 'react';

class SearchClient extends Component {
  render() {
    return (
      <div className=''>
        <label className='ui header'
          htmlFor='search'>Search client </label>
        <div className="ui icon input loading">
          <input type="search" id="search"
            placeholder="Enter search query" />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchClient;