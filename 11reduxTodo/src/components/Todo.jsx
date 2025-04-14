import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    return (
        <div className="flex justify-center items-center bottom-12 inset-x-0">
            <ul className="flex justify-center items-center gap-3">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-center items-center">
                        {todo.text}
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete Todo</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;