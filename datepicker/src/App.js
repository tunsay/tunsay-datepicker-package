import React, { useState } from 'react'

import { DateLayoutPicker } from 'tunsay-datepicker-package'

const App = () => {
  const [formData, setFormData] = useState({
    dateofbirth: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
