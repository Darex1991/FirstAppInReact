import React, {Component, PropTypes} from 'react';
import { Form, Text } from 'react-form'
import './defaultInput.sass'

export default class ProfileComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="profile default-input">
        <h1>Profile</h1>
        <div className="row">
          <div className="col-xs-6 m--b">
            <label>FirstName</label>
            <Text field='firstName' />
          </div>
          <div className="col-xs-6 m--b">
            <label>LastName</label>
            <Text field='lastName' />
          </div>
          <div className="col-xs-12 m--b">
            <label>Email</label>
            <Text field='email' type="email"/>
          </div>
          <div className="col-xs-6 m--b">
            <Text field='password' type="password" placeholder="Password"/>
          </div>
          <div className="col-xs-6 m--b">
            <Text field='password2' type="password" placeholder="Password confirm"/>
          </div>
        </div>
      </div>
    )
  }
}
