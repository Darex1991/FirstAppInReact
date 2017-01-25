import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'react-form'
import { sortBy, clone, findIndex } from "lodash";

export default class NotificationComponent extends Component {
  static propTypes = {
    dataBase: PropTypes.object.isRequired,
    updateDataBase: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
  }

  checkFunction = (item, type) => {
    const {id} = item;
    const base = clone(this.props.dataBase);
    const itemIndex = findIndex(base.phones, (item) => item.id == id);
    base.phones[itemIndex][type] = !item[type];
    this.props.updateDataBase(base);
  };

  render() {
    let fields = this.props.dataBase.phones.map( (item, i) => {
      return (
        <tr key={i} >
          <td><p>{ item.name } <span>({ item.value }) </span></p></td>
          <td><input type="checkbox" checked={ item.checked } onChange={ event => { this.checkFunction(item, 'checked', event.target.value) } }/></td>
          <td><input type="checkbox" checked={ item.highPriority } onChange={ event => { this.checkFunction(item, 'highPriority') } }/></td>
        </tr>
      )});

    return (
      <div className="profile default-input">
        <h2> Notification </h2>

        <div>
          <table>
            <tbody>
              <tr>
                <th> </th>
                <th>Standard Prior</th>
                <th>High Prior</th>
              </tr>
              <tr>
                <td><p> Email <span>(asdasd@asdasd.pl)</span></p></td>
                <td><Checkbox field='emailCheckbox'/></td>
                <td><Checkbox field='emailCheckboxPremium'/></td>
              </tr>
              {fields}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
