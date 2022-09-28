import React, { Component } from "react";
class Conrendering extends Component{
    constructor(props){
        super(props)
        this.state={
            problem:true
        }
    }
    render(){
        if(this.state.problem){

       
        return(
            <div>
                True
            </div>
        )
        }
        else{
            return(
                <div>
                    False
                </div>
            )
        }
        
    }
}
export default Conrendering