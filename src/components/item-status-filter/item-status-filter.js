import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render(){
    const   {
      onFiltered,
      type
    } = this.props;
  //  console.log('item-status-filter ', type);
  var filters = [{label:'All', status: true},
                {label:'Active', status: false},
                {label:'Done', status: false}];


      filters = filters.map((el) => {
        let label = el.label;
        let status = el.label === type ? true : false;
        return {label: label, status: status}
      })

  const filterButtons = filters.map((item) => {

        const {label, status} = item;
        let className = "btn";
        status ? className += " btn-info" : className += " btn-outline-secondary";

        return (
          <button
            key={label}
            type="button"
            className={className}
            onClick={() => onFiltered(label)}>{label}
          </button>
        );
      });

  return(
      <div className="btn-group">
        {filterButtons}
      </div>
    )
  }
}
