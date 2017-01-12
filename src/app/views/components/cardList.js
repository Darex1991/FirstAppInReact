import React, {Component, PropTypes} from 'react';
import {debounce} from "lodash";

import CardComponent from './cardComponent';

export default class CardList extends Component {
  static get propTypes() {
    return {
      cards: PropTypes.array.isRequired
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards
    };
    this.pushSendArray();
  }

  pushSendArray() {
    debounce(() => {
      const card = { id: (new Date()).getTime(), name: 'test' };
      console.log(this.props.addNewCard,'this.props.addNewCard');
      this.props.addNewCard(card);
    }, 3000)();
  };

  render() {
    return (
      <div>
        { this.state.cards.map(item => <CardComponent key={item.id} item={item}/>) }
      </div>
    )
  }
}
