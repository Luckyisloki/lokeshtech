import React, { useEffect, useState } from "react";
import './Dashboard.css';
import { Table } from "react-bootstrap";

const Dashboard = ()=> { 
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState('');

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
      <center>
      <h3>Enter City</h3>
      <input type="text"
      value={search}
      placeholder="Search..."
      onChange={(e)=> setSearch(e.target.value)}
      />
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
                        user.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map((item)=>{
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
</center>
    </div>

  );
}

export default Dashboard;