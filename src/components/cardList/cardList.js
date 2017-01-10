import React, {Component} from 'react';
import CardComponent from '../cardComponent/cardComponent';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.cards = [];
  }

  render() {
    let newArray = [{
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
    }];

    let newArray2 = { id: 4, name: 'dupa' };
    let cards = this.cards;
    cards = [...newArray];

    let pushSecondArray = () => {
      console.log(cards);
      cards.push(newArray2);
      console.log(cards);
    };

    setTimeout(() => pushSecondArray(), 500);

    return (
      <div>
        { this.cards.map(item => <CardComponent key={item.id} item={item}/>)
        }
      </div>
    )
  }
}
export default CardList;
