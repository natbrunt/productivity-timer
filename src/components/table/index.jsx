import React from 'react'
import AddTodo from '../launchModal/addTodo'
function index({todos}) {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1000px]">
  <table className="table w-full">
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

        </tr>
       ))}

    </tbody>
  </table>
  <AddTodo />
  </div>
</div>
  )
}

export default index
