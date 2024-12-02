import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Định nghĩa component Job
function Job(){
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        // Đọc dữ liệu từ LocalStorage kiểm tra tồn tại key="account"
        const existAccount = JSON.parse(localStorage.getItem("account"));
        if(!existAccount){
            // Điều hướng về Login component
            navigate("/");
        }

        // console.log(existAccount.uId);
        

        // Đọc dữ liệu từ API lấy các Jobs
        fetch("http://localhost:9999/jobs?uId="+existAccount.uId)
            .then(response => response.json())
            .then(result => setJobs(result))
            .catch(err => console.error(err));

    }, []);

    return (
        <div>
            <h2>List of Jobs</h2>

            <table style={{border:"1px solid blue"}}>
                <tr>
                    <th>Id</th><th>Title</th><th>Category</th><th>Status</th><th colSpan={2}>Functions</th>
                </tr>
                {
                    jobs?.map(j => (
                        <tr key={j?.jId}>
                            <td>{j?.jId}</td>
                            <td>{j?.title}</td>
                            <td>{j?.cId}</td>
                            <td>{j?.status==true?<span>Completed</span>:<span>Not completed</span>}</td>
                            <td>
                                <Link to="/">Job details</Link>
                            </td>
                            <td>
                                <Link to="/jobs">Delete</Link>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Job;