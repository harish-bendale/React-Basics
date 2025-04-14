import { useState } from "react";
import { useDispatch } from "react-redux";
import  {addTodo}  from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        if(input != '') {
            e.preventDefault()
            dispatch(addTodo(input))
            setInput('')
        }
    }

    return (
        <form onSubmit={addTodoHandler} className="flex justify-center items-center top-12 gap-3 inset-x-0">
            <input 
                type = "text"
                placeholder="Enter a todo"
                onChange={(e)=>setInput(e.target.value)}
                value={input}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;