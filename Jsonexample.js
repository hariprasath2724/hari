import React from "react";
import { useState } from "react";
import   './styleeeee.css';
function Jsonexample(){
    const [json,setJson]=useState([
        {
            id:1,
            title : 'books writing by',
            stu:'hohn' 
        },
        {
            id:2,
            title:'best cricketer',
            stu:'dhoni'
        },
        {
            id:3,
            title :'player of the match',
            stu:'shardul tahkur'
        },
        {
            id:4,
            title:'man of the match',
            stu:'gill'
        }
    ])
    return(
        <div>
            {json.map(n=><div className="hari1"><h2 class="hari">{n.id}</h2><h4 className="hari2">{n.title}</h4><h1>{n.stu}</h1></div>)}
        </div>
    )
}
export default Jsonexample