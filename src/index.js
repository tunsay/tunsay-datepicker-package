import React from 'react'
import DatePicker from 'react-datepicker'

export const DateLayoutPicker = ({ name, selected, onChange }) => {
  return (
    <DatePicker
      id={name}
      name={name}
      selected={selected}
      onChange={onChange}
      required
    />
  )
}
