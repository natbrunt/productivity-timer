import { useState } from 'react'

import Modal from '../Modal/themes'
function App({changeTheme, theme}) {



  return (
    <div className='w-100'>

        
<button className="btn fixed right-0" onClick={()=>document.getElementById('my_modal_2').showModal()}><h1 className='text-4xl'>🧮</h1></button>

      <Modal changeTheme={changeTheme} theme={theme}/>

    </div>
  )
}

export default App
