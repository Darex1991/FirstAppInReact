import React from 'react'
import { FormInput } from 'react-form'

export default function InputWithoutValue ({field, showErrors, errorBefore, isForm, noTouch, ...rest}) {
  return (
    <FormInput field={field} showErrors={showErrors} errorBefore={errorBefore} isForm={isForm}>
      {({setValue, getValue, setTouched}) => {
        return (
          <input
            {...rest}
            onBlur={() => setTouched(true)}
          />
        )
      }}
    </FormInput>
  )
}
