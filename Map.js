 import React, { Component } from "react";
class Map extends Component{
    state={
        name:"raj",
        number:[1,2,3,4,5],
        fruits:["apple","mango","orange","pinapple"],
        student:["apple","mango","orange","pinapple"]


    }
    render(){
        return(
            <div>
                <h1>Map</h1>
                {this.state.number.map((n,i)=><h2 key={i}>{n}</h2>)}
                {this.state.fruits.map((fr,i)=><h2 key={i}>{fr}{i+2}</h2>)}
                {this.state.student.map((st)=><h2>{st}</h2>)}
                {/* {this.state.name.map((na,i)=><h2 key={i}>{na}{i}</h2>)} */}
                {/* {this.state.number.map=((n,i)=><h2 key={i}>{n}</h2>)}
                {this.state.number.map=((n,i)=><h2 key={i}>{n}</h2>)} */}
            </div>
        )
    }
}
export default Map