import React, { Component, PropTypes } from 'react';
import { clone } from "lodash";
import InputWithoutValue from './InputWithoutValue'

export default class AddNewPhoneComponent extends Component {
  static propTypes = {
    dataBase: PropTypes.object.isRequired,
    updateDataBase: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      displayForm: false,
      newPhone: {
        name: '',
        value: ''
      }
    }
  }

  addNew = () => {
    const newPhone = clone(this.state.newPhone);
    const cloneDatabase = clone(this.props.dataBase);

    newPhone.id = cloneDatabase.phones.length +1;
    newPhone.key = newPhone.id;
    this.setState({newPhone});

    cloneDatabase.phones.push(newPhone);
    this.props.updateDataBase(cloneDatabase);
    this.setState({ newPhone: { name: '',value: '' } });
    this.setState({ displayForm: false });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const newPhone = clone(this.state.newPhone);
    newPhone[name] = value;
    this.setState({newPhone});
  };

  seeForm = () => {
    this.setState({ displayForm: !this.state.displayForm })
  };

  render() {
    return (
      <div>
        <button onClick={this.seeForm}>Add new</button>

        {this.state.displayForm &&
          <div>
            <div className="col-xs-6 m--b">
              <label> Name </label>
              <InputWithoutValue name='name' value={ this.state.newPhone.name } onChange={ this.handleChange }/>
            </div>
            <div className="col-xs-6 m--b">
              <label> Value </label>
              <InputWithoutValue name='value' value={ this.state.newPhone.value } onChange={ this.handleChange }/>
            </div>
            <button onClick={ this.addNew }>Add</button>
          </div>
        }
      </div>
    )
  }
}
