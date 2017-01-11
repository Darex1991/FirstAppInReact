import React from 'react';
import CardList from './cardList/cardList';
import NewCardForm from './newCardForm/newCardForm';
import './app.css';

export default class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state  = {
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
    }

  }

  render() {
    return (
      <div className="index">
        <NewCardForm />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
