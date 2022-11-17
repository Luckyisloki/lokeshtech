import React,{useState} from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [nameval, setNameval] = useState(false);
  const [emailval, setEmailval] = useState(false);
  const [passworder, setPassworderr] = useState(false);
  const [confirmpass, setConfirmpass] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:""
  })

  const changeHandler = (e) =>{
    setData({
      ...data,[e.target.name]:e.target.value
    })
  }

  const submitHandler = (e) =>{
   e.preventDefault();
   if(data.username == ""){
    setNameval(true);
   }
   if(data.email == ""){
    setEmailval(true)
   }
   if(data.password == ""){
    setPassworderr(true)
   }
   if(data.confirmpassword == ""){
    setConfirmpass(true)
   }
   if(data.email !=="" && data.password !=="" && data.username !=="" && data.confirmpassword !==""){
    setNameval(false);
    setEmailval(false);
    setPassworderr(false);
    setConfirmpass(false);
    localStorage.setItem('username',data.username);
    localStorage.setItem('email',data.email);
    localStorage.setItem('password',data.password);
    localStorage.setItem('confirmpassword',data.confirmpassword);
 
  }
 
}
  return (
    <div className='division'>
      <center>
       <form onSubmit={submitHandler} autoComplete="off" className='register-form'>
        <h5>Create account</h5><br/>
        <p className='black'>Already have an account? &nbsp;<Link to="/signin">Sign in</Link> </p> 
       
        
        <input className='register-field' type="email" onChange={changeHandler} name="email" placeholder='Email' /><br/><br/>
        {
          emailval ? <p className='paras'>* Email required</p> : null
        }
        <input className='register-field' type="text" onChange={changeHandler} name="username" placeholder='First name | Last name' /><br/><br/>
        {
          nameval ? <p className='para'>* Username required</p> : null
        }
        <input className='register-field' type="password" onChange={changeHandler} name="password" placeholder='Password' /><br/><br/>
        {
          passworder ? <p className='para'>* Password required</p> : null
        }
        <input className='register-field' type="password" onChange={changeHandler} name="confirmpassword" placeholder='Confirm password' /><br/><br/>
        {
          confirmpass ? <p className='paragraph'>* Confirm password required</p> : null
        }
        <input className='register-button' type="submit" value="Sign up" /><br />

        <div className="main">
        <div> <input type="checkbox" className='check'/></div>
        <div><p className='black'>I have read and agree to the</p>
        <p className='blue'>Terms of service</p></div>
        </div>
       </form>
      
       </center>
    </div>
  )
}

export default SignUp