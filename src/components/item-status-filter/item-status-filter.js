import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  render(){
    const   {
      onFiltered,
      type
    } = this.props;
  //  console.log('item-status-filter ', type);
  return(
      <div className="btn-group">
        <button type="button"
          className="btn btn-info"
          onClick={() => this.props.onFiltered('All')}>All</button>
        <button type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onFiltered('Active')}>Active</button>
        <button type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.onFiltered('Done')}>Done</button>
      </div>
    )
  }
}
