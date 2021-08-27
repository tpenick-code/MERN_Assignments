const Todo = (props) => {
    const toDoClasses = [""];

    if (props.todo.complete) {
    toDoClasses.push("line-through");
    }

    return (
    <div>
        <input onChange = {(event) =>{
            props.handleToggleComplete (props.i);
            }} checked = {props.todo.complete} type = "checkbox"/>
            <span className = {toDoClasses.join (" ")}>{props.todo.text}</span>
            <button onClick = {(event) => {
            props.handletoDoDelete(props.i);
            }} style = {{marginLeft:"7px"}}>Delete</button>
    </div>
    ); 
}

export default Todo;