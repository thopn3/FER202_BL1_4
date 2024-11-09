import React, {Component} from "react";

class ClsState extends Component{
    // Cách khởi tạo State (object) ban đầu cho class component
    state = {
        first: false,
        second: true
    };

    render(){
        return (
            <div>
                <button disabled={this.state.first}>First</button>
                <button disabled={this.state.second}>Second</button>
            </div>
        )
    }
}

export default ClsState;