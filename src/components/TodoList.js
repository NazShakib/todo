import React from 'react';

import Todo from './Todo';

const TodoList = ({todo,setTodo})=>{

    //const [todo, setTodo] = useState([]);

    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todo.map((todos) =>(
                <Todo todos={todos} setTodo={setTodo} todo={todo} key = {todos.key} text={todos.text}/>
        ))}
        </ul>
        </div>
    );
}

export default TodoList;