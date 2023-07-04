import React from "react"
 
function ToDoItem (props){
   console.log(props.id);
   return (<div  onClick={()=>
   {
      props.onChecked(props.id);
   }}>
      <li  >{props.text}</li>
   </div>)
}
export default ToDoItem;