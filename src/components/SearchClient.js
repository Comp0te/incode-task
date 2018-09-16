import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterClients } from '../AC';
import PropTypes from 'prop-types';

class SearchClient extends Component {
  static propTypes = {
    filterClients: PropTypes.func,
    isLoading: PropTypes.bool
  }

  render() {
    const {isLoading} = this.props

    return (
      <div>
        <label className='ui header'
          htmlFor='search'>Search client </label>
        <div className={isLoading ? "ui icon input loading" : "ui icon input"}>
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