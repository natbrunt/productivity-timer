import React from 'react'
import AddTodo from '../launchModal/addTodo'
function index({todos}) {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>To do</th>
        <th>Notes</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>

      { todos && todos.map((todo, index) => (
        <tr key={index} className="hover">
          <th>{index + 1}</th>
          <td>{todo.todo}</td>
          <td>{todo.notes}</td>
          <td>{todo.time}</td>
          <button className='btn btn-secondary'>finish</button>
        </tr>
       ))}


        <AddTodo />

    </tbody>
  </table>
</div>
  )
}

export default index
