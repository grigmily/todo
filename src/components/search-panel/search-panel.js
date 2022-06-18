import React from 'react';
import ItemStatusFilter from '../item-status-filter'
import './search-panel.css';

const SearchPanel = () => {

  const searchText = 'Type here to search';

  return     (
    <div className="search-input">
      <input
        placeholder={searchText}/>
        <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
