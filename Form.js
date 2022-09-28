import React, { Component } from "react";
class Form extends Component{
    state={
        name:"",
        age:"",
        ff:false
    }
    // handlename =(e)=>{
    //     this.setState({name: e.target.value})
    // }

    // handleage =(e)=>{
    //     this.setState({age: e.target.value})
    // }
    handlein=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit=()=>{
        this.setState({ff:true})
    }
    render(){
        return(
            <div>
           
            <div>
                <h1>Registration Form</h1>
                <label>Name</label>
                <input type="Text" name="name" value={this.state.name} onChange={this.handlein}></input> 
                
                <br></br>
                <br></br>

                <label>Age</label>
                <input type="number" name="age" value={this.state.age} onChange={this.handlein}></input>
                <br>
                </br>
                <br></br>
                </div>
            
           
            <div>
                <button onClick={this.handlesubmit}>submit</button>
                
          
                </div>
            
             { this.state.ff &&
              <div>
                
                <h1>my  name {this.state.name} is :: Age {this.state.age}</h1>
                </div>
            }



                
            </div>
        )
    }
}
export default Form