import React, {Component, PropTypes} from 'react';

export default class EditCard extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    editCard: PropTypes.func.isRequired
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
    const {name, value} = event.target;
    const changedCard = Object.assign(this.state.changedCard, {[name]: value});
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
          <input type="text" name="name" value={this.state.changedCard.name} onChange={this.handleChange}/>
        </label>

        <label>
          Description:
          <input type="text" name="description" value={this.state.changedCard.description}
                 onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit edit"/>
      </form>
    )
  }
}
