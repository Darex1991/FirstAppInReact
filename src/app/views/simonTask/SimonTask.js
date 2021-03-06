import React, { Component } from 'react';
import { Form } from 'react-form';
import classnames             from 'classnames';

import ProfileComponent from './ProfileComponent';
import NotificationComponent from './NotificationComponent';
import ColorComponent from './ColorComponent';
import PhoneNumbersComponent from './PhoneNumbersComponent';

export default class SimonTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      viewEntersAnim: true,
      dataBase: {
        phones: [
          { id:1, name: 'asd', key: 1, value: 'val 1', checked: true, highPriority: true },
          { id:2, name: 'asdasdasd', key: 2, value: 'val 122222', checked: false, highPriority: false  },
          { id:3, name: 'asdasdasd', key: 3, value: 'val asdasd', checked: false, highPriority: true },
          { id:4, name: '222', key: 4, value: 'val213123 1', checked: true, highPriority: false }]
      }
    };
  }

  updateDataBase = (dataBase) => {
    this.setState({dataBase})
  };

  validate = (values) => {
    const { firstName, lastName, email, password, password2 } = values;
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
  };

  defaultClassName = () => {
    const { animated, viewEntersAnim } = this.state;
    return {
      'animatedViews': animated,
      'view-enter': viewEntersAnim
    }
  };
  submit = (submitForm) => {
    return (
      <form onSubmit={submitForm}>
        <ProfileComponent />
        <PhoneNumbersComponent dataBase={ this.state.dataBase } updateDataBase={ this.updateDataBase } />
        <NotificationComponent dataBase={ this.state.dataBase } updateDataBase={ this.updateDataBase } />
        <ColorComponent />
        <button type='submit'> Submit </button>
      </form>
    )
  };

  defaultOptions = () => {
    return {
      emailCheckboxPremium: true,
      textCheckboxPremium: true,
      text2CheckboxPremium: true
    }
  };

  render() {
    return (
      <div className={ classnames (this.defaultClassName())} >
        <h1> SimonTask </h1>
        <Form
          onSubmit={ (values) => { console.log('Success!', values) }}
          validate={ (values) => { return this.validate(values) }}
          defaultValues={ this.defaultOptions() }
        >
          { ({ submitForm }) => this.submit(submitForm) }

        </Form>
      </div>
    );
  }
};
