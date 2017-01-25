import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'react-form'

export default class NotificationComponent extends Component {
  static propTypes = {
    dataBase: PropTypes.array.isRequired
  };

  constructor(props){
    super(props);
  }

  render() {
    let fields = this.props.dataBase.phones.map( (item, i) => {
      return (
        <tr key={i} >
          <td><p>{item.name} <span>({item.value}) </span></p></td>
          <td><Checkbox field={item.name}/></td>
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
