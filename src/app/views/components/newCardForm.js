import React, {PropTypes, Component} from 'react';

export default class NewCardForm extends Component {
  static get propTypes() {
    return {
      cards: PropTypes.array.isRequired
    };
  };

  constructor(props){
    super(props);
    this.handleSubmit = this.submitFunction.bind(this);
    // this.handleNameChanges = this.handleNameChanges.bind(this);
    // this.handleDescriptionChanges = this.handleDescriptionChanges.bind(this);
    this.state = {
      newCard: this.defaultNewCard(),
    };
  };

  defaultNewCard() {
    return {
      id: (new Date()).getTime(),
      name: '',
      description: '',
    };
  }

  submitFunction(event){
    event.preventDefault();
    // const newCard = { id: 123123, name: this.state.name, description: this.state.description };
    this.props.addNewCard(this.state.newCard);
    this.setState({newCard: this.defaultNewCard()});
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
  // handleNameChanges(event){
  //   this.setState({name: event.target.value});
  // };
  //
  // handleDescriptionChanges(event){
  //   this.setState({description: event.target.value});
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="test">
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>

        <label>
          Description:
          <input type="text" name="description" onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  };
}
