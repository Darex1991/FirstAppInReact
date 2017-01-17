import React, {Component, PropTypes} from 'react';
import {debounce} from "lodash";

import CardComponent from './cardComponent';
import CardsFunctions from "../services/CardsFunctions";

export default class CardList extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.pushSendArray();
  }

  pushSendArray() {
    debounce(() => {
      const card = { id: CardsFunctions.nextId(this.props.cards), name: 'test' };
      this.props.addNewCard(card);
    }, 3000)();
  };

  render() {
    return (
      <div>
        { this.props.cards.map(item => <CardComponent key={item.id} item={item} editCard={this.props.editCard}/>) }
      </div>
    )
  }
}
