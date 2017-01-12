import React, {
  Component
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import CardList from './cardList';
import NewCardForm from './newCardForm';

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      viewEntersAnim: true
    };
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
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  addNewCard = (card) => {
    const cards = [...this.state.cards, card];
    this.setState({cards});
  };

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <h1>
          Components
        </h1>
        <div
          style={{
            backgroundColor: '#F1F1F1F1',
            height: 1200
          }}>
          <div className="index">
            <NewCardForm cards={this.state.cards} />
            <CardList cards={this.state.cards} addNewCard={this.addNewCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default Components;
