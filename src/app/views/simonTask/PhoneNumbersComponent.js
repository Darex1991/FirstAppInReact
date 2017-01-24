import React, {Component, PropTypes} from 'react';
import {sortBy, clone, findIndex} from "lodash";
import InputWithoutValue from './InputWithoutValue'

export default class PhoneNumbersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataBase: this.props.dataBase
    };
  }

  goUp = (item, i) =>{
    const array = clone(this.state.dataBase);
    array.phones[i - 1].key += 1;
    array.phones[i].key -= 1;
    array.phones = sortBy(array.phones, 'key');
    this.setState({dataBase: array});
  };

  goDown = (item, i) =>{
    const array = clone(this.state.dataBase);
    array.phones[i + 1].key -= 1;
    array.phones[i].key += 1;
    array.phones = sortBy(array.phones, 'key');
    this.setState({dataBase: array});
  };

  handleChange = (item, changedCard, event) => {
    const {name, value, key} = event.target;
    const {id} = item;
    const itemIndex = findIndex(this.state.dataBase.phones, (item) => item.id == id);
    changedCard.phones[itemIndex].value = value;
    this.setState({dataBase: changedCard});
  };

  render() {
      let changedCard = this.state.dataBase;
      let phones = changedCard.phones.map( (item, i) => {
        return (
            <div className="col-xs-12" key={i} >
              <div className='col-xs-3'>
             <button disabled={item.key == 1} onClick={() =>this.goUp(item, i)}>GO UP</button>
             <button disabled={item.key == this.state.dataBase.phones.length} onClick={() =>this.goDown(item, i)}>GO DOWN</button>
             </div>
            <div className='col-xs-3'>
              {item.name}
             </div>
             <div className='col-xs-3'>
              <InputWithoutValue value={item.value} onChange={this.handleChange.bind(this, item, changedCard)}/>
             </div>
          </div>
          )});

    return (
      <div className="phone default-input">
        <h2>Phone</h2>
        {phones}
      </div>
    )
  }
}
