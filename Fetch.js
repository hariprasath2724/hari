import React, { useEffect, useState } from "react";


function Fetch(){
    const [todos,setTodos]=useState([])

    useEffect(()=>{
        fetch('http://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(data =>setTodos(data))
        


    }, [])
    console.log('todos',todos)

    return(
        <div>
            {todos.map(d=><div><h1>{d.id}</h1><div>{d.name}</div></div>)}
           
        </div>
    )
}
export default Fetch