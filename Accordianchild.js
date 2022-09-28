import React, { Component } from "react";
import './Accord.css'
class Accordianchild extends Component{
    state={
        showinfo:false
    }
    toggle =()=>{
        this.setState({showinfo:!this.state.showinfo})
    }
    render(){
        return(
            <div>
            <div class="aacd">
                <h2>{this.props.title}</h2>
                {/* <h2>{this.props.info}</h2> */}
                <button onClick={this.toggle}>{this.state.showinfo ?"-":"+"}</button>
                </div>
               
                {this.state.showinfo && <div>{this.props.info}</div>}
            </div>
        )
    }
}
export default Accordianchild