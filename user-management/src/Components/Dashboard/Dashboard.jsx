import React, { useEffect, useState } from "react";
import './Dashboard.css';
import { Table } from "react-bootstrap";

const Dashboard = ()=> { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://restcountries.com/v2/all")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      <h1>User List</h1>
      <button onClick={()=> window.location.href="/signin"} className='log'>Logout</button>
     
      <Table striped bordered hover className='table'>
                          <thead className='table-head'>
                          <tr>
                            <th >NAME</th>
                            <th>CAPITAL</th>
                            <th>REGION</th>
                            <th>POPULATION</th>
                            <th>CODE</th>
                         
                            </tr>
                          
                         </thead>
                         <tbody>
                       {
                        user.map((item)=>{
                          return(
                            
                               <tr>
                          
                        
                          <td>{item.name}</td>
                          <td>{item.capital}</td>
                          <td>{item.region}</td>
                          <td>{item.population}</td>
                          <td>{item.numericCode}</td>
                        
                        </tr>
                            
                          )
                        })
                       }

                       </tbody>
    </Table>

    </div>

  );
}

export default Dashboard;