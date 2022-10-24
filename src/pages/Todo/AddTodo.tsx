import React, { useRef } from 'react'
import './NewTodo.css'

type Props = {
  addTodo:(text:string)=>void
}

const AddTodo:React.FC<Props> = ({addTodo}) => {
  const todoTextRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
   if(!todoTextRef.current?.value) return;
   addTodo(todoTextRef.current!.value)
   todoTextRef.current.value = ''
    
  }
  return (
    <form onSubmit={handleSubmit}>
     <div className="form-control">
     <label htmlFor="add-todo">Add Todo</label>
      <input type='text' id='add-todo' placeholder='Add Todo' ref={todoTextRef}/>
     </div>
     <input type="submit" value="Add Todo" />
    </form>
  )
}

export default AddTodo