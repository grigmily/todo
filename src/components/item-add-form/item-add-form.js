import React, { useState } from "react";
import "./item-add-form.css";
import PropTypes from "prop-types";

const ItemAddForm = ({ onItemAdded }) => {
  ItemAddForm.defaultProps = {
    onItemAdded: () => {},
  };

  ItemAddForm.propTypes = {
    onItemAdded: PropTypes.func,
  };
  const [label, setLabel] = useState("");

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(label);
    setLabel("");
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={label}
      />
      <button className="btn btn-outline-secondary" id="submit">
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
