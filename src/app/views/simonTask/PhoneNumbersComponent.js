import React, { Component, PropTypes } from 'react';
import { sortBy, clone, findIndex } from "lodash";

import InputWithoutValue from './InputWithoutValue'
import AddNewPhoneComponent from './AddNewPhoneComponent'

export default class PhoneNumbersComponent extends Component {
  static propTypes = {
    dataBase: PropTypes.object.isRequired,
    updateDataBase: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
  }

  goUp = (item, i) =>{
    const array = clone(this.props.dataBase);
    array.phones[i - 1].key += 1;
    array.phones[i].key -= 1;
    array.phones = sortBy(array.phones, 'key');
    this.props.updateDataBase(array);
  };

  goDown = (item, i) =>{
    const array = clone(this.props.dataBase);
    array.phones[i + 1].key -= 1;
    array.phones[i].key += 1;
    array.phones = sortBy(array.phones, 'key');
    this.props.updateDataBase(array);
  };

  handleChange = (item, event) => {
    const {id} = item;
    const base = clone(this.props.dataBase);
    const itemIndex = findIndex(base.phones, (item) => item.id == id);
    base.phones[itemIndex].value = event;
    this.props.updateDataBase(base);
  };

  render() {
    let changedCard = this.props.dataBase;
    let phones = changedCard.phones.map( (item, i) => {
      return (
        <div className="col-xs-12" key={i}>
          <div className='col-xs-3'>
            <button disabled={ item.key == 1 } onClick={ () => this.goUp(item, i) }> GO UP </button>
            <button disabled={ item.key == this.props.dataBase.phones.length } onClick={ () => this.goDown(item, i) }> GO DOWN </button>
          </div>

          <div className='col-xs-3'>
            { item.name }
          </div>

          <div className='col-xs-3'>
            <InputWithoutValue value={ item.value } onChange={ event => { this.handleChange(item, event.target.value) } } />
          </div>
        </div>
      )});

    return (
      <div className="phone default-input">
        <h2> Phone </h2>
        <AddNewPhoneComponent dataBase={ this.props.dataBase } updateDataBase={ this.props.updateDataBase } />
        { phones }
      </div>
    )
  }
}
