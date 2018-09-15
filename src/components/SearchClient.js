import React, { Component } from 'react';

class SearchClient extends Component {
  render() {
    return (
      <div className='ui segments'>
        <label className='ui segments'
          htmlFor='search'>Search client</label>
        <div class="ui icon input loading">
          <input type="search" id="search"
            placeholder="Enter search query" />
          <i class="search icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchClient;