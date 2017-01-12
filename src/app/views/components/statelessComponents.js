import React, { Component } from 'react';
import './statelessComponents.sass'

export default class Profile extends Component {
  static get propTypes() {
    return {
      item: React.PropTypes.object
    };
  }
  isSelected = (role) => {
    return this.props.selectedRole === role;
  };
  render() {
    const newItem = this.props.item;
    return (
      <div className="statelessComponents">
        <div className="small">
          <img src="http://pipsum.com/310x310.jpg" alt="test" />
        </div>
        <div className="big">
          <h1>{ newItem.name }</h1>
          <h3>{ newItem.description }</h3>
        </div>
      </div>
    )
  }
}
