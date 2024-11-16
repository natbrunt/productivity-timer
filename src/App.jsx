import React, {useState} from 'react'
import Timer from './components/timer/index'
import Table from './components/table/index'
import ChangeTheme from './components/launchModal/changeTheme'
import AddTodo from './components/launchModal/addTodo'
function App() {
  const [theme, setTheme] = useState('cyberblue');

  const changeTheme = (newTheme) => setTheme(newTheme);
  return (

    <div data-theme={theme} className='w-100 h-screen'>
      <ChangeTheme changeTheme={changeTheme} theme={theme}/>
      <Timer /> 
      <AddTodo />
      <Table />
    </div>
  )
}

export default App
