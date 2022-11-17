import React,{useState,useContext} from 'react'
import axios from 'axios';
import {Navigate,Link} from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [emailerr, setEmailerr] = useState(false);
  const [passworderr, setPassworderr] = useState(false);

  let emailData = localStorage.getItem('email');
  let passData = localStorage.getItem('password');
 
  const [data, setData] = useState({
    email:"",
    password:"",
   
  })

  const changeHandler = (e) =>{
    setData({
      ...data,[e.target.name]:e.target.value
    })
  }

  const submitHandler = (e) =>{
   e.preventDefault();
   if(data.email == ""){
    setEmailerr(true);
   }
   if(data.password == ""){
    setPassworderr(true)
   }
  else{
    window.location.href="/dashboard"
  }
  

  
  }

  return (
    <div className='division'>
      <center>
       <form onSubmit={submitHandler} autoComplete="off" className='form-table'>
        <h5>Sign In</h5>

        <input className="email-text" type="email" onChange={changeHandler} name="email" placeholder='Email' /><br/><br/>
        {
          emailerr ? <p className='email-field'>* Email required</p> : null
        }
       
        <input className="email-text" type="password" onChange={changeHandler} name="password" placeholder='Password' /><br/><br/>
        {
          passworderr ? <p className='pass-field'>* Password required</p> : null
        }
      
        <input type="submit" value="Sign in" className='login' /><br /><br/>
       
        {/* <p className='account'>Don't have an account?</p>  
       <Link to="/signup"> <p className='account'>Sign Up</p></Link> */}
       
       </form>
       </center>
    </div>
  )
}

export default SignIn