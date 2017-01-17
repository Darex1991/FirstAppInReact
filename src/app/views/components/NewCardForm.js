import React, {PropTypes, Component} from 'react';

import CardsFunctions from "../services/CardsFunctions";

export default class NewCardForm extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  constructor(props){
    super(props);
    this.handleSubmit = this.submitFunction.bind(this);
    this.state = {
      newCard: this.defaultNewCard(),
    };
  };

  defaultNewCard = () => {
    return {
      name: '',
      description: '',
    };
  };

  submitFunction = (event) => {
    const newCard = this.state.newCard;
    newCard.id = CardsFunctions.nextId(this.props.cards);
    this.props.addNewCard(newCard);
    this.setState({newCard: this.defaultNewCard()});
    event.preventDefault();
  };

  handleChange = (event) => {
    let eventName = event.target.name;
    let eventValue = event.target.value;
    const newCard = Object.assign(this.state.newCard, {[eventName]: eventValue });
    this.setState({newCard});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="test">
        <label>
          Name:
          <input type="text" name="name" value={this.state.newCard.name} onChange={this.handleChange} />
        </label>

        <label>
          Description:
          <input type="text" name="description" value={this.state.newCard.description} onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  };
}
