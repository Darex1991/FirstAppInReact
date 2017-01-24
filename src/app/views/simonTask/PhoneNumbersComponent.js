import React, {Component, PropTypes} from 'react';
import {sortBy, clone, findIndex} from "lodash";
import InputWithoutValue from './InputWithoutValue'

export default class PhoneNumbersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: [{id:1, name: 'asd', key: 1, value: 'val 1'},{id:2, name: 'asdasdasd', key: 2, value: 'val 122222'},{id:3, name: 'asdasdasd', key: 3, value: 'val asdasd'},{id:4, name: '222', key: 4, value: 'val213123 1'}]
    };
  }

  goUp = (item, i) =>{
    const array = clone(this.state.test);
    array[i - 1].key += 1;
    array[i].key -= 1;
    const sortedArray = sortBy(array, 'key');
    this.setState({test: sortedArray});
    return false;
  };

  goDown = (item, i) =>{
    const array = clone(this.state.test);
    array[i + 1].key -= 1;
    array[i].key += 1;
    const sortedArray = sortBy(array, 'key');
    this.setState({test: sortedArray});
    return false;
  };

  handleChange = (item, changedCard, event) => {
    const {name, value, key} = event.target;
    const {id} = item;
    const itemIndex = findIndex(this.state.test, (item) => item.id == id);
    changedCard[itemIndex].value = value;
    this.setState({test: changedCard});
  };

  render() {
      let changedCard = this.state.test;
      let phones = changedCard.map( (item, i) => {
        return (
            <div className="col-xs-12" key={i} >
              <div className='col-xs-3'>
             <button disabled={item.key == 1} onClick={() =>this.goUp(item, i)}>GO UP</button>
             <button disabled={item.key == changedCard.length} onClick={() =>this.goDown(item, i)}>GO DOWN</button>
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
