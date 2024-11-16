import React from 'react'

function index() {
  return (

<dialog id="my_modal_add" className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Add to do</h3>
        
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
  )
}

export default index