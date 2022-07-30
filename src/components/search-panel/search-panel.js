import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter'
import PropTypes from 'prop-types';
import './search-panel.css';

export default class SearchPanel extends Component {

static defaultProps = {
  onFiltered: ()=>{},
  filterType: 'All',
  searchValue: '',
  onChange: ()=>{},
};

static propTypes = {
  onFiltered: PropTypes.func,
  filterType: PropTypes.oneOf(['All','Done','Active']),
  searchValue: PropTypes.string,
  onChange: PropTypes.func
};


render(){
  const   {
    onFiltered,
    filterType,
    searchValue,
    onChange
  } = this.props;

  const searchText = 'Type here to search';
  return (
        <div className="search-input">
          <input
            value={searchValue}
            placeholder={searchText}
            onChange={(e) => onChange(e.target.value)}/>
          <ItemStatusFilter
            onFiltered={(filterType) => onFiltered(filterType)}
            filterType={filterType}/>
        </div>
    )
  };
};
