import React, { useState } from "react";
import './Food.css'
function Food(){
    const[student,setStudent]=useState([
        {
            name:'raj',
            id:1,
            dept:'ECE'
        },
        {
            name:'hari',
            id:2,
            dept:'EEE'
        },
        {
            name:'guru',
            id:3,
            dept:'CSE'
        },
        {
            name:'raj',
            id:4,
            dept:'ECE'
        },
        {
            name:'hari',
            id:5,
            dept:'EEE'
        },
        {
            name:'prasath',
            id:6,
            dept:'CSE'
        },
        {
            name:'jawahar',
            id:7,
            dept:'ECE'
        },
        {
            name:'marks',
            id:8,
            dept:'EEE'
        },
        {
            name:'henry',
            id:9,
            dept:'CSE'
        }

        ]
    )
    const[datarender,setDatarender]=useState(student)

    const dept = student.map(stu=>stu.dept)
    console.log(dept);

    
    const uniqdep = [...new Set(dept)]
    console.log(uniqdep);

    uniqdep.unshift("ALL")

    const handlechange =(d)=>{
        if(d === "ALL")
        {
        setDatarender(student)
        return
        }
        const filterdata=student.filter(data=> data.dept === d)
        setDatarender(filterdata)
        console.log("click",d)
}
    return(
        <div>
            <br>
            </br>
            <br></br>
            {uniqdep.map(d=><span onClick={()=>handlechange(d)} class="menuspan">{d}</span>)}
            {datarender.map(stu=><div class="menudiv">{stu.dept}......{stu.name}</div>)}
        </div>
    )
}
export default Food