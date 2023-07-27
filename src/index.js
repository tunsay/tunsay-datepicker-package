import React from 'react'
import DatePicker from 'react-datepicker'

/**
 * DateLayoutPicker Component
 * A custom date picker component that wraps the React DatePicker component.
 * This component simplifies the usage of the React DatePicker by providing a predefined layout.
 * It renders an input field with a calendar picker for selecting dates.
 *
 * @component
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.name - The name of the input field.
 * @param {Date} props.selected - The currently selected date.
 * @param {function} props.onChange - A callback function to handle date changes.
 * @returns {JSX.Element} - The JSX element representing the DateLayoutPicker component.
 *
 */
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
