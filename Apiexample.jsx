import React, { useState } from "react";
import { useEffect } from "react";
function Apiexample(){
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(data => setTodos(data))
    },[])
    console.log('todos',todos);
    return(
        <div>
           {todos.map(d=><div><img src={"https://api.lorem.space/image/face?w=640&h=480&r=2594"} height={100} width={100} />{d.id}<div>{d.name}</div></div>)}
        </div>
    )

}
export default Apiexample