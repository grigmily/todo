import React from "react";
import ItemStatusFilter from "../item-status-filter";
import PropTypes from "prop-types";
import "./search-panel.css";

const SearchPanel = ({ onFiltered, filterType, searchValue, onChange }) => {
  SearchPanel.defaultProps = {
    onFiltered: () => {},
    filterType: "All",
    searchValue: "",
    onChange: () => {},
  };

  SearchPanel.propTypes = {
    onFiltered: PropTypes.func,
    filterType: PropTypes.oneOf(["All", "Done", "Active"]),
    searchValue: PropTypes.string,
    onChange: PropTypes.func,
  };

  return (
    <div className="search-input">
      <input
        value={searchValue}
        placeholder={"Type here to search"}
        onChange={(e) => onChange(e.target.value)}
      />
      <ItemStatusFilter
        onFiltered={(filterType) => onFiltered(filterType)}
        filterType={filterType}
      />
    </div>
  );
};

export default SearchPanel;
