import React, { Component, PropTypes } from 'react';
import Profile from './statelessComponents';

export default class CardComponent extends Component {
  static get propTypes() {
    return {
      item: PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div>
        <Profile item={this.props.item} />
      </div>
    );
  }
}
