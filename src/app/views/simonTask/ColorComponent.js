import React, { Component, PropTypes } from 'react';
import { Form, Text, Checkbox } from 'react-form'

export default class ColorComponent extends Component {
  render() {
    return (
      <div className="profile default-input">
        <h2> Color Schema </h2>

        <div>
          <Checkbox field='darkColorSchema'/>
          <p> Dark schema </p>
        </div>
      </div>
    )
  }
}
