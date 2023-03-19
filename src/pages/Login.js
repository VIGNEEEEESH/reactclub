import React, { useState } from 'react';
import "../Css files/Login.css";
import un from "../components/images/user.png"
import pw from "../components/images/pw.png"
import url from '../Baseurl'
import bg from "../components/images/light rays.png"
import loginImg from '../components/images/robot.png'
import { useDispatch } from 'react-redux';
import { notification } from 'antd';


function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleEmailChange = (event) => {
    setEmail({value: event.target.value})
  }
  const handlePasswordChange = (event) => {
    setPassword({value: event.target.value})
  }

  

  const onsubmit = async (event) =>{
    event.preventDefault();
    const formValues = {
      "email":email.value,
      "password":password.value,
    }
    const response=await fetch(url+"api/user/login",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({...formValues})
    }
    )
    
    const resJSON = await response.json();
  }
  
   function myFunction(){
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      
      
      x.type = "text";
      
    } else {
      x.type = "password";
      
    }
  }

  
  
  
  
  

  
   
    return (
      <div className="Login ">
        
      <center>
      <div className="form">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/><br/><br/><br/>
            <form onSubmit={onsubmit}>
            <img src={un} height="25px"/>  <input onChange={handleEmailChange} className="o" type="text" placeholder="Email"/><br/><br/>
            <img src={pw} height="25px"/>    <input onChange={handlePasswordChange} className="o" type="password" id="myInput"  placeholder="Password"/><br/><br/>
            <input type="checkbox" id="showImageButton" onClick={myFunction}/>&nbsp; Show Password <br/><br/>
            <input type="submit" />
            </form>
          </div>
        </div>
          </center>
          
         
       
      </div>
    );
    
  }




export default Login
