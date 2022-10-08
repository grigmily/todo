<<<<<<< HEAD
import React, {Component} from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
=======
import React, { Component } from 'react';
import './item-add-form.css';
import PropTypes from 'prop-types';

export default class ItemAddForm extends Component {

  static defaultProps = {
    onItemAdded: ()=>{}
  };

  static propTypes = {
    onItemAdded: PropTypes.func
  };

>>>>>>> 01bec99e73362ea00924da1ba81d669f651ee075
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary" id="submit">
          Add Item
        </button>
      </form>
    );
  }
}
