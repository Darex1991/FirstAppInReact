import React, {Component} from 'react';
import {debounce} from "lodash";

import CardComponent from '../cardComponent/cardComponent';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          name: 'asd',
          description: 'Lorem ipusasdas da da sd a',
        }, {
          id: 2,
          name: 'sasd',
        }, {
          id: 3,
          name: '3asd',
          description: 'asd asd as das dsd as da sd',
        },
      ]
    };

    this.pushSendArray();
  }

  pushSendArray() {
    console.log("=== calling push send array");
    debounce(() => {
      const cards = [{id: (new Date()).getTime(), name: 'test'}, ...this.state.cards];
      this.setState({cards});
    }, 3000)();
  };

  render() {
    return (
      <div>
        {this.state.cards.map(item => <CardComponent key={item.id} item={item}/>)}
      </div>
    )
  }
}
export default CardList;
