import React from 'react'

function index() {
  return (

<dialog id="my_modal_add" className="modal">
    <div className="modal-box">
        <h1 className="custom-h1">Add</h1>
        <input
  type="text"
  placeholder="To do"
  className="input input-bordered input-primary w-full max-w-xs" />
  <input
  type="text"
  placeholder="Note"
  className="input input-bordered input-secondary w-full max-w-xs" />
  <input
  type="text"
  placeholder="Time"
  className="input input-bordered input-secondary w-full max-w-xs" />
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
  )
}

export default index