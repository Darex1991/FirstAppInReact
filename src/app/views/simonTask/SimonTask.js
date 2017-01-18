import React, {Component} from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import {Form, Text} from 'react-form';
import ProfileComponent from './ProfileComponent';
import NotificationComponent from './NotificationComponent';

export default class SimonTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      viewEntersAnim: true
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState);
  };

  render() {
    const {animated, viewEntersAnim} = this.state;
    return (
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <h1>
          SimonTask
        </h1>
        <Form
          onSubmit={(values) => {
            console.log('Success!', values)
          }}
          validate={ values => {
            const { firstName, lastName, email, password, password2} = values;
            return {
                firstName: !firstName ? 'First name is required' : undefined,
                lastName: !lastName ? 'Last name is required' : undefined,
                email: !email ? 'Email name is required' : undefined,
                password: (() => {
                  if (!password || password != password2) {
                    if (!password){ return 'Password confirm name is required' }
                    else { return `Password confirm must be the same` }
                  }
                })(),
                password2: (() => {
                  if (!password2 || password != password2) {
                    if (!password2){ return 'Password confirm name is required' }
                    else { return `Password confirm must be the same` }
                  }
                })()
              }
          }}
          defaultValues={{
            emailCheckboxPremium: true,
            textCheckboxPremium: true,
            text2CheckboxPremium: true
          }}
        >
          {({submitForm}) => {
            return (
              <form onSubmit={submitForm}>
                <ProfileComponent />
                <NotificationComponent />
                <button type='submit'>Submit</button>
              </form>
            )
          }}

        </Form>
      </div>
    );
  }
};
