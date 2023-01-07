import React from "react";
import { formatDistanceToNow } from "date-fns";
import Timer from "./timer";
import "./todo-list-item.css";
import PropTypes from "prop-types";

function TodoListItem(props) {
  TodoListItem.defaultProps = {
    done: false,
    important: false,
    dateCreatedAt: new Date(),
  };

  TodoListItem.propTypes = {
    done: PropTypes.bool,
    important: PropTypes.bool,
    dateCreatedAt: PropTypes.instanceOf(Date),
  };

  const {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    done,
    important,
    dateCreatedAt,
    timerId,
  } = props;

  let createdAtString = formatDistanceToNow(dateCreatedAt, {
    addSuffix: true,
    includeSeconds: true,
  });

  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }

  return (
    <div className={classNames}>
      <div className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </div>
      <div className="nonlabel-container">
        <div className="todo-list-item-created">created {createdAtString}</div>
        <Timer key={timerId} />
        <div className="buttons-container">
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}
          >
            <i className="fa fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
