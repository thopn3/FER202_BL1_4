import { useState } from "react";
import { Table } from "react-bootstrap";

function FetchAPI(props) {
    const { todoData, users } = props; // todoData: Nguồn dữ liệu ban đầu
    const [todoList, setToDoList] = useState([...todoData]);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
        // Lọc dữ liệu của todoData theo gia tri của search
        const searchResult = todoData?.filter(t => t.title.toLowerCase().startsWith(search.toLowerCase()));
        // Thay đổi trạng thái dữ liệu của todoList
        if (searchResult) {
            setToDoList(searchResult);
        } else {
            setMessage("Not found!");
        }
    }

    const getToDoByUserId = (uId) => {
        const todoResult = todoData?.filter(t => t.userId == uId);
        setToDoList([...todoResult]);
    }

    return (
        <div>
            <form className="form-group" style={{ textAlign: "center" }}>
                <input id="txtSearch" onChange={(e) => handleSearch(e)} />
            </form>

            <p style={{textAlign:"center", margin:"20px 0px"}}>
                <ul style={{listStyle:"none"}}>
                    {
                        users?.map(u => (
                            <li key={u?.id} style={{display: "inline-block", margin: "0px 10px"}} className="btn btn-primary"
                                onClick={()=>getToDoByUserId(u.id)}>
                                {u?.username}
                            </li>
                        ))
                    }
                </ul>
            </p>

            {
                message.length == 0 ? (
                    <Table hover bordered striped>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>User</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoList?.map(t => (
                                    <tr key={t.id}>
                                        <td>{t.id}</td>
                                        <td>{t.title}</td>
                                        <td>
                                            {users?.find(u => u.id == t.userId)?.name}
                                        </td>
                                        <td>{t.completed === true ? "Yes" : "No"}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (<div style={{ color: "red" }}>{message}</div>)
            }

        </div>

    )
}

export default FetchAPI;