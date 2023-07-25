import React, { useState } from 'react'

import { DateLayoutPicker } from 'tunsay-test-package'
import 'tunsay-test-package/dist/index.css'

const App = () => {
  const [startDate, setDateData] = useState(new Date())
  return (
    <DateLayoutPicker
      name='startDate'
      selected={startDate}
      onChange={setDateData}
    />
  )
}

export default App
