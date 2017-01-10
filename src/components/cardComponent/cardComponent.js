import React, { Component } from 'react';
import Profile from '../stateless_components/statelessComponents';

class CardComponent extends Component {

  render() {
    return (
      <div>
        <Profile item={this.props.item} />
      </div>
    );
  }
}

export default CardComponent;
