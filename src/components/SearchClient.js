import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterClients } from '../AC'

class SearchClient extends Component {
  render() {

    return (
      <div>
        <label className='ui header'
          htmlFor='search'>Search client </label>
        <div className="ui icon input loading">
          <input type="search" id="search"
            placeholder="Enter search query..."
            onChange={this.onSearch} />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }

  onSearch = (evt) => {
    const searchValue = evt.target.value.toLowerCase().trim();
    this.props.filterClients(searchValue)
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    filterClients: (searchQuery) => {
      dispatch(filterClients(searchQuery))
    }
  }
);

export default connect(null, mapDispatchToProps)(SearchClient);