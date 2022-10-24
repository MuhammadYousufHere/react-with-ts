import React from 'react'
import './TodoList.css'
import {FaTrash} from 'react-icons/fa'
interface Props {
  items:{id:string,text:string}[];
  onDelete:(todoId:string)=> void
}
const TodoItem:React.FC<Props> = ({items,onDelete}) => {
  return (
    <ul>
      {
        items.map((item)=>{
          return <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={onDelete.bind(null,item.id)}><FaTrash />Delete </button>
          </li>
        })
      }
    </ul>
  )
}

export default TodoItem