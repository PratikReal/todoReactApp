import React, { useState } from "react";
import "./App.css"


 function Todo({todo,index, completeList,removeList}){
     return(
       <div style={{textDecoration: todo.done ? "line-through":""}}
        className="todo-List">

         <h3>{todo} </h3> 
 
         <div className="todolistbtn" >
         <button onClick={() => completeList(index)} >CompleteTask</button>
         <button onClick={() => removeList(index)} >removeTask</button>
         </div>

       </div>
     )
 }

 function TodoForm({addToDo}){ 
    const [value , setValue] = useState("")

    const onsubmithandler = (e) => {
       e.preventDefault();
       if(!value)return;
       addToDo(value);
       setValue("");
    }

    return(
      <div className="AppTodo" >  
        <form className=""  onSubmit={onsubmithandler}> 
          <input  type="text" placeholder="Enter Your Task"  value={value} onChange={(e) =>{ setValue(e.target.value) }}/>
          <input type="submit" value="AddYourTask" />
        </form>
      </div>
    )
 }


 function App(){
   const [todos,setTodos] = useState([
     {name:"Pratik1",done:false},
     {name:"Pratik22",done:false},
     {name:"Pratik333",done:false}

 ]);

 const addToDo = name =>{
   const newTodos = [...todos, {name}];
   setTodos(newTodos);
 }

 const completeList = index =>{
  const newTodos = [...todos];
  newTodos[index].done = true;
  setTodos(newTodos);
 
}

 const removeList = index =>{
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}

   return(
     <div>
       {todos.map((val,index) => (
         <Todo key={index} index={index} todo={val.name} completeList={completeList} removeList={removeList} />
       ))}
       <TodoForm addToDo={addToDo} />
</div>
   )

 }


 export default App