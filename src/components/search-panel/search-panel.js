import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter'
import './search-panel.css';

export default class SearchPanel extends Component {

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
