import React,{useState} from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import {Todo} from './Todos.model'

const TodoApp = () => {
  const [todos,setTodos] = useState<Todo[]>([])
  const deleteHandler = (TodoId:string)=>{
    return setTodos(prevTodos => {
     return prevTodos.filter((todo)=> todo.id !== TodoId)
  })
  }
  const addTodoHandler = (text:string)=>{
    setTodos(prevTodo=> [...prevTodo, {id:Math.random().toString(),text}])
  }
  return (
    <div>
      <AddTodo addTodo={addTodoHandler}/>
      <TodoItem items={todos} onDelete={deleteHandler}/>
    </div>
  )
}

export default TodoApp