import React, { Component } from "react";
import Accordianchild from "./Accordianchild";
class Accordian extends Component{
    state={
        datas: [
            {
                id:1,
                title:'Do i have allow the use of cookies',
                info:'unocorn viniyil is the mist of the indian'
            },
            {
                id:2,
                title:'How ti change my password',
                info:'unocorn viniyil is the mist of the indian'
            },
            {
                id:3,
                title:'Do i have allow the use of cookies',
                info:'unocorn viniyil is the mist of the indian'
            },
            {
                id:4,
                title:'How ti change my password',
                info:'unocorn viniyil is the mist of the indian'
            },
        ],
    }
    render(){
        return(
            <div>
                {this.state.datas.map(d=>(
                <div>
                    <Accordianchild title={d.title} info={d.info}/>
                </div>
                ))}
                
                    {/* {this.state.datas.map((d)=><div>
                        <h2>{d.title}</h2>
                    </div>)} */}
                
            </div>
        );
    }
}
export default Accordian