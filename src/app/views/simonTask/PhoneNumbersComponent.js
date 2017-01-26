import React, { Component, PropTypes } from 'react';
import { sortBy, clone, findIndex } from "lodash";

import InputWithoutValue from './InputWithoutValue'
import AddNewPhoneComponent from './AddNewPhoneComponent'

export default class PhoneNumbersComponent extends Component {
  static propTypes = {
    dataBase: PropTypes.object.isRequired,
    updateDataBase: PropTypes.func.isRequired
  };

  goUp = (item, index) =>{
    const copyDataBase = clone(this.props.dataBase);
    copyDataBase.phones[index - 1].key += 1;
    copyDataBase.phones[index].key -= 1;
    copyDataBase.phones = sortBy(copyDataBase.phones, 'key');
    this.props.updateDataBase(copyDataBase);
  };

  goDown = (item, index) =>{
    const copyDataBase = clone(this.props.dataBase);
    copyDataBase.phones[index + 1].key -= 1;
    copyDataBase.phones[index].key += 1;
    copyDataBase.phones = sortBy(copyDataBase.phones, 'key');
    this.props.updateDataBase(copyDataBase);
  };

  handleChange = (item, event) => {
    const {id} = item;
    const copyDataBase = clone(this.props.dataBase);
    const itemIndex = findIndex(copyDataBase.phones, (item) => item.id == id);
    copyDataBase.phones[itemIndex].value = event;
    this.props.updateDataBase(copyDataBase);
  };

  renderPhones = () => {
    let changedCard = this.props.dataBase;
    return changedCard.phones.map( (item, index) => {
      return (
        <div className="col-xs-12" key={index}>
          <div className='col-xs-3'>
            <button disabled={ item.key == 1 } onClick={ () => this.goUp(item, index) }> GO UP </button>
            <button disabled={ item.key == this.props.dataBase.phones.length } onClick={ () => this.goDown(item, index) }> GO DOWN </button>
          </div>

          <div className='col-xs-3'>
            { item.name }
          </div>

          <div className='col-xs-3'>
            <InputWithoutValue value={ item.value } onChange={ event => { this.handleChange(item, event.target.value) } } />
          </div>
        </div>
      )});
  };

  render() {
    return (
      <div className="phone default-input">
        <h2> Phone </h2>
        <AddNewPhoneComponent dataBase={ this.props.dataBase } updateDataBase={ this.props.updateDataBase } />
        { this.renderPhones() }
      </div>
    )
  }
}
