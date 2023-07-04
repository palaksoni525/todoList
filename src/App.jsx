import React, { useState } from "react"
import ToDoItem from "./components/ToDoItem"
function App(){
        const[inputtext,setInputText]=useState("")
        
        function handleChange(event){
               setInputText(event.target.value);

        }
        function deleteItem(id){
           setItems(prevItems => {
               return prevItems.filter ((item, index) =>{
                    return index !== id;
               });
           });
        }
        function clearInput(){
             setInputText("");                   
        }

        
        const[items,setItems]=useState([]);
        function Add(){
              
              setItems((prevItems) => {
                const i=document.getElementById('input-box')
                 i.value="";
               return [...prevItems,inputtext]
              });
              
              
             
        }
   return <div id ="inner-div">
          <h1 >ToDoList</h1>
        <input id="input-box" onChange={handleChange} placeholder="enter task" style={{borderWidth:0 }}></input>
        <button  id= "submit-button"onClick={Add}>Add</button>
          <div>
           <ul>
                {items.map((todoitem,index) => (
                    <ToDoItem  
                          key={index} 
                          id={index}
                          text={todoitem}
                          onChecked={deleteItem}
                    />
                ))}
           </ul>
           </div>
   </div>
}
export default App;