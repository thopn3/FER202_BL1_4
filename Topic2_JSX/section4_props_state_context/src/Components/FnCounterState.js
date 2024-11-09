import React, {useState} from "react";

function FnCounterState(){
    // Khai báo và khởi tạo giá trị ban đầu cho các biến. Đồng thời, sử dụng useState để quản lý trạng thái dữ liệu của chúng
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    function changeCount(){
        setCount(count+1);
        setMessage("Count changed");
    }

    return (
        <div>
            <div>Count: {count}</div>
            <div>{message}</div>
            <button className="btn btn-primary"
                onClick={()=> changeCount()}>
                Increment Count
            </button>
        </div>
    )
}

export default FnCounterState;