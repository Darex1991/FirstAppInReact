import React, {Component, PropTypes} from 'react';

export default class EditCard extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.submitFunction.bind(this);
    this.state = {
      existingCard: this.props.item,
      changedCard: _.clone(this.props.item)
    }
  };

  handleChange = (event) => {
    let eventName = event.target.name;
    let eventValue = event.target.value;
    const changedCard = Object.assign(this.state.changedCard, {[eventName]: eventValue });
    this.setState({changedCard});
  };

  submitFunction = (event) => {
    this.props.editCard(this.state.changedCard);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name={this.props.item.id}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.changedCard.name} onChange={this.handleChange} />
        </label>

        <label>
          Description:
          <input type="text" name="description" value={this.state.changedCard.description} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit edit" />
      </form>
    )
  }
}
