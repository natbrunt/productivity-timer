import React from 'react'

function clock({seconds, minutes}) {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">

  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":`${minutes}`}}></span>
    </span>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":`${seconds}`}}></span>
    </span>
    sec
  </div>
</div>
  )
}

export default clock
