import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Định nghĩa component Login
function Login(){
    // Khai báo state: users để chứa dữ liệu từ API trả về
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState();

    const navigate = useNavigate(); // Đối tượng sử dụng cho hoạt động điều hướng trong component

    // Quản lý vòng đời của Component
    useEffect(()=>{
        // Gửi request tới API lấy users
        fetch("http://localhost:9999/users")
            .then(response => response.json())
            .then(result => setUsers(result))
            .catch(err => console.error(err));
        
    }, []);

    // console.log(users);
    function handleLogin(e){
        // Ngăn chặn hoạt động load trang khi kích form được submit 
        e.preventDefault();
        // So sánh dữ liệu từ api với dữ liệu trên form
        const existUser = users?.find(u => u.user == username && u.pass == password);
        if(existUser){
            // Lưu thông tin vào localStorage
            localStorage.setItem("account", JSON.stringify({id:existUser.id, username: existUser.user}));
            // Nếu tồn tại người dùng này thì điều hướng sang Job component
            navigate("/jobs");
        }else{
            setMessage("This account not exist!");
        }
    }

    return (
        <div>
            {
                message && <div style={{color:"red"}}>{message}</div>
            }
            <form onSubmit={(e)=>handleLogin(e)}>
                Username <input onChange={(e)=>setUsername(e.target.value)}/> <br/>
                Password <input type="password" onChange={(e)=>setPassword(e.target.value)}/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

export default Login;