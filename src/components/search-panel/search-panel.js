import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter'
import './search-panel.css';

export default class SearchPanel extends Component {

render(){
  const   {
    onFiltered,
    type
  } = this.props;

  const searchText = 'Type here to search';
  return (
        <div className="search-input">
          <input
            placeholder={searchText}/>
          <ItemStatusFilter
            onFiltered={(type) => onFiltered(type)}
            type={type}/>
        </div>
    )
  };
};
