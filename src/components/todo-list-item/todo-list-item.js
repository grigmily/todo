import React, { Component } from 'react';
import { formatDistanceToNow  } from 'date-fns';
import './todo-list-item.css';
import PropTypes from 'prop-types';

export default class TodoListItem extends Component {

  static defaultProps = {
    done: false,
    important: false,
    dateCreatedAt:  new Date()
  };

  static propTypes = {
    done: PropTypes.bool,
    important: PropTypes.bool,
    dateCreatedAt:  PropTypes.instanceOf(Date)
  }

  render(){
      const   {
        label,
        onDeleted,
        onToggleImportant,
        onToggleDone,
        done,
        important,
        dateCreatedAt
      } = this.props;
      let createdAtString = formatDistanceToNow(dateCreatedAt, { addSuffix: true, includeSeconds: true });
      let classNames = "todo-list-item";
      if (done) {
        classNames += ' done';
      };

      if ( important ) {
        classNames += ' important';
      }

      return (
        <div className={classNames}>
            <div
              className="todo-list-item-label"
              onClick={onToggleDone}>
                { label }
            </div>
            <div
              className="nonlabel-container">
            <div
              className="todo-list-item-created">
              created {createdAtString}
            </div>
            <div
              className="buttons-container">
            <button
              type="button"
              className="btn btn-outline-success btn-sm"
              onClick={onToggleImportant}>
                <i className="fa fa-exclamation"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={onDeleted}>
              <i className="fa fa-trash-can"></i>
            </button>
            </div>
            </div>
        </div>
      )
  }
}
