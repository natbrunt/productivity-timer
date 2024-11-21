import React from 'react'

function controls({setOn, setOff, active}) {
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={()=>document.getElementById('controls').showModal()}>Change</button>
      
      <button 
        className="btn btn-secondary m-2"
        onClick={active == true ? () => setOff() : ()=> setOn()}
      >
        {active == true ? 'Pause' : 'Start'}
      
      </button>
    </div>
  )
}

export default controls
