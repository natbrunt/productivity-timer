import { useState } from 'react'

import Modal from '../Modal/add'
function App({changeTheme, theme}) {



  return (
    <div className=''>

        
    <button 
        className="btn" 
        onClick={()=>document.getElementById('my_modal_add').showModal()}
    >
      +
    </button>

      <Modal />

    </div>
  )
}

export default App
