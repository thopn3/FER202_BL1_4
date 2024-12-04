import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./job.css";

// Định nghĩa component Job
function Job(){
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCatId, setSelectedCatId] = useState(0);

    useEffect(()=>{
        // Đọc dữ liệu từ LocalStorage kiểm tra tồn tại key="account"
        const existAccount = JSON.parse(localStorage.getItem("account"));
        if(!existAccount){
            // Điều hướng về Login component
            navigate("/");
        }

        // Đọc dữ liệu từ API lấy các Jobs
        fetch("http://localhost:9999/jobs?uId="+existAccount.id)
            .then(response => response.json())
            .then(result => {
                // Kiểm tra dữ liệu của search
                if(search.length == 0){
                    let newJobs = [];
                    if(selectedCatId == 0)
                        newJobs = [...result];
                    else
                        newJobs = result?.filter(j => j?.cId == selectedCatId);
                    setJobs(newJobs);
                }
                else{
                    let newJobs = [];
                    if(selectedCatId == 0)
                        newJobs = result?.filter(j => j?.title.toLowerCase().includes(search.toLowerCase()));
                    else
                        newJobs = result?.filter(j => j?.title.toLowerCase().includes(search.toLowerCase()) && j?.cId == selectedCatId);
                    setJobs(newJobs);
                }
            })
            .catch(err => console.error(err));

        // Đọc dữ liệu từ API lấy các Category
        fetch("http://localhost:9999/categories")
            .then(response => response.json())
            .then(result => setCategories(result))
            .catch(err => console.error(err));
        
    }, [search, selectedCatId]);

    function handleDelete(id){
        if(window.confirm("Do you want delete JobId = "+id)){
            // Gửi request tới API: http://localhost:9999/jobs/:id -> Delete Job
            fetch("http://localhost:9999/jobs/"+id, {method: "DELETE"})
                .then(() => {
                    alert("Delete Success!");
                    window.location.reload();
                })
                .catch(err => console.error(err));
        }
    }

    return (
        <div>
            <h2>List of Jobs</h2>
            
            <div style={{textAlign:"center"}}>
                <input 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Input title to search ..."/>
            </div>

            <div>
                Filter by: 
                <select onChange={e => setSelectedCatId(e.target.value)}>
                    <option value={0}>-- Select Category --</option>
                    {
                        categories?.map(c => (
                            <option key={c?.id} value={c?.id}>{c?.name}</option>
                        ))
                    }
                </select>
            </div>
            <hr/>
            <table>
                <tr>
                    <th>Id</th><th>Title</th><th>Category</th><th>Status</th><th colSpan={2}>Functions</th>
                </tr>
                {
                    jobs?.map(j => (
                        <tr key={j?.id}>
                            <td>{j?.id}</td>
                            <td>{j?.title}</td>
                            <td>
                                {categories?.find(c => c?.id == j?.cId)?.name}
                            </td>
                            <td>{j?.status==true?<span>Completed</span>:<span>Not completed</span>}</td>
                            <td>
                                <Link to="/">Job details</Link>
                            </td>
                            <td>
                                <Link to="/jobs" onClick={()=>handleDelete(j?.id)}>Delete</Link>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Job;