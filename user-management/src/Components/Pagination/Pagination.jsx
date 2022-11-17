import React from 'react'
import { useState } from 'react'

const Pagination = () => {
  const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,
11,12,13,14,15,
16,17,18,19,20,
21,22,23,24,25,26,27,28,29,30]);

  const [pagesize, setPagesize] = useState(5);
  const [currpage, setCurrpage] = useState(0);
  const [curritems, setCurritems] = useState(items.slice(0,pagesize));
  const [pagecount, setPagecount] = useState(Math.ceil(items.length/pagesize));

  const onPageChange = (index)=>{
   setCurrpage(index);
   let curritems = items.slice(index * pagesize, pagesize * (index + 1));
   setCurritems(curritems);
  }


  
  return (
    <div>
      <center>
      <h1>Welcome to Pagination</h1>
      <table>
        <tr>
            <th>S.NO</th>
            <th>Name</th>
        </tr>
        {curritems.length > 0 && curritems.map((item, index) => (
            <tr key={index}>
         <td>{item}</td>
         <td>User {item}</td>
            </tr>
            ))}
      </table>
     

    <div>
        <button>Prev</button>
        {Array(pagecount).fill(null).map((page, index) => (
          <button key={index} onClick={()=> onPageChange(index)}>{index + 1}</button>
        ))}
        <button>Next</button>
      </div>
  
      </center>
  
    </div>
  )
}

export default Pagination