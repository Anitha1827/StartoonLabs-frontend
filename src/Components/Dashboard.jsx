import React, { useEffect, useState } from "react";
import { getuserdata } from "../service";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"


function Dashboard() {
    const [data, setData] = useState("")
    const [usertype, setUserType] = useState("");
    let navigate = useNavigate();
    
    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(!token){
        navigate("/login");
        }else{
        fetchdata()
        }
    },[])

  const fetchdata = async() => {
    let token = localStorage.getItem("token");
    console.log("test", token)
    let details  = await getuserdata({token})
    console.log(details)
    if(details && details.message === "User Details !"){
       setUserType("user")
       setData(details.data)
    }else if(details && details.message === "All user Details !"){
        setUserType("admin")
        setData(details.data)
    }

  };
  return (
    <div className="homepage">
      {
        usertype == "user" && <>
        <h1>Welcome to Dashboard</h1>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Last Login date: {data.lastLoginDate}</p>
        </>
      }

      {
        usertype == "admin" && <>
        <h1>Welcome to Admin Dashboard</h1>
        {
            data.length && (
                <table>
                   <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Count</th>
                        <th>Last Login Date</th>
                    </tr>
                   </thead>
                   <tbody>
                    {
                        data.map((val,idx)=>(
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.count}</td>
                                <td>{val.lastLoginDate}</td>
                            </tr>
                        ))
                    }
                   </tbody>
                </table>
            )
        }
        </>
      }
    </div>
  );
}
export default Dashboard;
