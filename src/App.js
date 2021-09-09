import React, {useState} from 'react';
import './App.css';

// import components from 
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText]= useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List Demo</h1>
      </header>
      <Form 
      todo={todo} 
      setTodo={setTodo} 
      setInputText={setInputText} 
      inputText={inputText} />
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
