import { useState } from "react";
import { Table } from "react-bootstrap";

function FetchAPI(props) {
    const { todoData } = props; // todoData: Nguồn dữ liệu ban đầu
    const [todoList, setToDoList] = useState([...todoData]);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        // Lọc dữ liệu của todoData theo gia tri của search
        const searchResult = todoData?.filter(t => t.title.toLowerCase().startsWith(search.toLowerCase()));
        // Thay đổi trạng thái dữ liệu của todoList
        if (searchResult) {
            setToDoList(searchResult);
        } else {
            setMessage("Not found!");
        }
    }

    return (
        <div>
            <form className="form-group" style={{ textAlign: "center" }}>
                <input onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-success" onClick={(e) => handleSearch(e)}>Search</button>
            </form>
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
                                        <td>{t.userId}</td>
                                        <td>{t.completed === true ? "Yes" : "No"}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) : (<div style={{color:"red"}}>{message}</div>)
            }

        </div>

    )
}

export default FetchAPI;