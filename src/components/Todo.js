import React from 'react';


const Todo = ({todos,todo,setTodo,key,text}) => {

    const deleteHandler = ()=>{
        console.log(todo);
        setTodo(todo.filter(el =>el.id !== todos.id));
    }
    

const completeHandler = ()=>{
        setTodo(todo.map((item) => {
            if (item.id===todos.id)
            {
                return{
                    ...item,
                    complete:!item.complete
                }
            }
            return item;
        })
    );
};
    
    return(
        
        <div className = 'todo'>
            <li className = {`todo-list $(todos.complete) ? 'completed'}`}>
                {text}
            </li>
            <button onClick={completeHandler} className ='complete-btn'><i className = 'fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className = 'fas fa-trash'></i></button>
        </div>
        
        
    );
}

export default Todo;