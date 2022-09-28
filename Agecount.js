import React, { Component } from "react";
class Agecount extends Component {
    state = {
        age: 0,
    };
    handlechange = () => {
        this.setState({ age: this.state.age + 1 })
    }
    render() {
        return (
            <div>
                <h1>hari</h1>
                <h5>Age:{this.state.age}</h5>
                <button onClick={this.handlechange}>Click</button>
            </div>
        )
    }
}
export default Agecount