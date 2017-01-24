import React, {Component, PropTypes} from 'react';
import {sortBy, clone} from "lodash";
import { Text } from 'react-form'

export default class PhoneNumbersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: [{id:1, name: 'asd', key: 1, value: 'val 1'},{id:2, name: 'asdasdasd', key: 2, value: 'val 122222'},{id:3, name: 'asdasdasd', key: 3, value: 'val asdasd'},{id:4, name: '222', key: 4, value: 'val213123 1'}]
    }
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

  render() {
      let phones = this.state.test.map( (item, i) => {
        return (
            <div className="col-xs-12" key={i} >
             <button disabled={item.key == 1} onClick={() =>this.goUp(item, i)}>GO UP</button>
             <button disabled={item.key == this.state.test.length} onClick={() =>this.goDown(item, i)}>GO DOWN</button>
             {item.name}
             <Text field={item.id}/>
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
