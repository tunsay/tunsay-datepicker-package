import React, { useState } from 'react'

import { DateLayoutPicker } from 'tunsay-datepicker-package'

/**
 * Root component of the application.
 * This component uses the DateLayoutPicker component from the tunsay-datepicker-package
 * to display a form with a Date of Birth field.
 */
const App = () => {
  // Local state to store form data
  const [formData, setFormData] = useState({
    dateofbirth: null
  })

  /**
   * Handles the form submission.
   * This function is called when the user submits the form.
   * It prevents the default form behavior (page reload).
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add the logic to process the form data here.
  }

  /**
   * Handles the change of selected date of birth.
   * This function is called when the user selects a new date in the DateLayoutPicker.
   * It updates the local state formData with the newly selected date.
   * @param {Date} date - The date of birth selected by the user.
   */
  const handleDateChange = (date) => {
    setFormData({ ...formData, dateofbirth: date })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='dateofbirth'>Date of Birth:</label>
        <DateLayoutPicker
          name='dateofbirth'
          selected={formData.dateofbirth}
          onChange={handleDateChange}
        />
      </div>
    </form>
  )
}

export default App
