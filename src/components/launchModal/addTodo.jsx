import { useState } from 'react'

import Modal from '../Modal/add'
function App({changeTheme, theme}) {



  return (
    <div className='w-100'>

        
    <button 
        className="btn btn-primary" 
        onClick={()=>document.getElementById('my_modal_add').showModal()}
    >
        Add to do
    </button>

      <Modal />

    </div>
  )
}

export default App
