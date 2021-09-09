import React from 'react';

const  Form = ({setInputText, todo, setTodo, inputText})=> {

const inputTextHandler = (e)=>{
    console.log(e.target.value);
    setInputText(e.target.value);
}

const submitHandler = (e)=>{
    e.preventDefault();
    setTodo([
        ...todo,
        {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        } 
    ])
}

return(
    <form>
    <input vale={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>

)}

export default Form;