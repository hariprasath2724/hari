import React, { useState } from "react";
function FunctionalComponents(props){
    const[Hero,setHero]=useState("batman")
    return(
        <div>
            <h1>kumar likes {Hero}</h1>
            <h2>{props.title} guys How are you?</h2>
        </div>
    )
}
export default FunctionalComponents