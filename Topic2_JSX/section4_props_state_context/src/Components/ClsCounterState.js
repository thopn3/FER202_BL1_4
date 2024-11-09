import React, {Component} from "react";

class ClsCounterState extends Component{
    // Khai báo và gán giá trị ban đầu cho biến count
    state = {
        count: 0,
        message: "Count not changed!"
    };

    // Hàm xử lý thay đổi giá trị của count trong state
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
            message: "Count changed."
        });
    }
    render(){
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <div>{this.state.message}</div>
                <button className="btn btn-primary"
                        onClick={this.incrementCount}>
                    Increment Count
                </button>
            </div>
        )
    }
}

export default ClsCounterState;