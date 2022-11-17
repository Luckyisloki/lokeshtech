import React ,{useState}from 'react'

const Conversion = () => {
    const [text, setText] = useState("")


    const convertHandler =()=>{
      
      setText(text.toUpperCase());
    }
  return (
    <div>
        <center>
        <input type="text" onChange={(e)=>setText(e.target.value)}/><br/><br/>
        <button onClick={convertHandler}>Convert to Upper</button><br></br>

        {text}
        </center>
       
    </div>
  )
}

export default Conversion
