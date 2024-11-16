import React from 'react'

function controls({setMinutes, setSeconds}) {
  return (
    <div>
      <button className="btn btn-primary m-2">Change</button>
      <button className="btn btn-secondary m-2">Pause</button>
    </div>
  )
}

export default controls
