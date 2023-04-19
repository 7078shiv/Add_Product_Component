import React from 'react'
const Todos=[
    {name:"sleeping",isCompleted:true},
    {name:"eating",isCompleted:false},
    {name:"instagram",isCompleted:true},
    {name:"playing",isCompleted:false}
]
export const Todolist = () => {
  return (
    <div>
        <ul>
        {
        Todos.map((todo)=>{
            <li>{todo.name}</li>  
        })
       }
    </ul>
    </div>
  )
}
