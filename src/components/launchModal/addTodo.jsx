import { useState } from 'react'


function App({changeTheme, theme}) {



  return (

<div className='hover cursor-pointer text-center font-bold text-3xl w-full bg-pink-200' onClick={()=>document.getElementById('my_modal_add').showModal()}>+</div>

  )
}

export default App
