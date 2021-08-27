import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [newToDo, setnewToDo] = useState("");
  const [toDos, settoDos] = useState ([]);

const handleNewTodoSubmit = (event) => {
  event.preventDefault();
  
  if (newToDo.length === 0) {
    return; 
  };

  const toDoItem = {
    text: newToDo,
    complete: false
  };

  settoDos([...toDos, toDoItem]);
  setnewToDo("");
};

const handletoDoDelete = (delIdx) => {
  const filteredtoDos = toDos.filter ((todo, i) => {
    return i !== delIdx;
  });

  settoDos(filteredtoDos);
};

const handleToggleComplete = (idx) =>{
  const updatedTodos = toDos.map((todo,i) => {
    if ( idx === i) {
      todo.complete = !todo.complete;
    }
    return todo;
  });

  settoDos (updatedTodos);
}

  return (
    <div style = {{textAlign: "center"}}>
      <form onSubmit = {(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange = {(event) => {
          setnewToDo(event.target.value);
        }} type = "text" value = {newToDo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {toDos.map((todo, i) => {

        return (
          <Todo 
          i = {i}
          key = {i} 
          todo = {todo} 
          handleToggleComplete = {handleToggleComplete}
          handletoDoDelete = {handletoDoDelete}
          />
        );
      })}
    </div>
  );
}

export default App;




