import React, {PropTypes, Component} from 'react';

export default class NewCardForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.submitFunction.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  submitFunction(event){
    event.preventDefault();
  }

  handleChanges(event){
    console.log(event.target);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChanges}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
