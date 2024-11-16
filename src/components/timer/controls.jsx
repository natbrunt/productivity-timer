import React from 'react'

function controls({setMinutes, setSeconds}) {
  return (
    <div>
      <button className="btn btn-primary">Change</button>
      <button className="btn btn-secondary">Pause</button>
    </div>
  )
}

export default controls
