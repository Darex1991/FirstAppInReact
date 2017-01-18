import React, {Component, PropTypes} from 'react';
import { Form, Text, Checkbox } from 'react-form'

export default class NotificationComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="profile default-input">
        <h2>Notification</h2>

        <div>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Standard Prior</th>
                <th>High Prior</th>
              </tr>
              <tr>
                <td><p>Email <span>(asdasd@asdasd.pl)</span></p></td>
                <td><Checkbox field='emailCheckbox'/></td>
                <td><Checkbox field='emailCheckboxPremium'/></td>
              </tr>
              <tr>
                <td><p>Text <span>(4040404)</span></p></td>
                <td><Checkbox field='textCheckbox'/></td>
                <td><Checkbox field='textCheckboxPremium'/></td>
              </tr>
              <tr>
                <td><p>Text <span>(4040404)</span></p></td>
                <td><Checkbox field='text2Checkbox'/></td>
                <td><Checkbox field='text2CheckboxPremium'/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
