import React, {useState} from 'react'
import Timer from './components/timer/index'
import Table from './components/table/index'
import ChangeTheme from './components/launchModal/changeTheme'

import Modal from './components/Modal/add'

function App() {
  const [theme, setTheme] = useState('cupcake');
  const [todos, setTodos] = useState([{todo:'Timer', notes:'master tokens and daisyui', time:'2 hours'}]);

  const changeTheme = (newTheme) => setTheme(newTheme);
  return (

    <div data-theme={theme} className='w-screen h-screen'>
      <ChangeTheme changeTheme={changeTheme} theme={theme}/>
      <Timer /> 
      <Modal />
      <Table todos={todos}/>
    </div>
  )
}

export default App
