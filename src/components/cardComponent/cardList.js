import React, {Component, PropTypes} from 'react';
import {debounce} from "lodash";

import CardComponent from './cardComponent';

export default class CardList extends Component {
  static get propTypes() {
    return {
      cards: PropTypes.array.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      newArray: [...this.props.cards]
    };
    this.pushSendArray();
  }

  pushSendArray() {
    console.log("=== calling push send array");
    debounce(() => {
      const cards = [...this.state.newArray, {id: (new Date()).getTime(), name: 'test'}];
      this.setState({newArray: cards});
    }, 3000)();
  };

  render() {
    return (
      <div>
        {this.state.newArray.map(item => <CardComponent key={item.id} item={item}/>)}
      </div>
    )
  }
}
