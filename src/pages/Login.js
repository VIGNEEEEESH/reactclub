import React, { useState } from 'react';
import "../Css files/Login.css";
import un from "../components/images/user.png"
import pw from "../components/images/pw.png"
import url from '../Baseurl'
import bg from "../components/images/light rays.png"
import loginImg from '../components/images/robot.png'
import {setGlobalState,useGlobalState} from "/Users/dvigneshwarreddy/Desktop/reactclub/src/pages/States.js"
import { notification } from 'antd';


function Login() {
  
  
   function myFunction(){
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      
      
      x.type = "text";
      
    } else {
      x.type = "password";
      
    }
  }
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  
  const handleUsernameChange = (event) => {
    setUsername({value: event.target.value})
  }
  const handlePasswordChange = (event) => {
    setPassword({value: event.target.value})
  }
  const onsubmit = async (event) =>{
    event.preventDefault();
    
    const formValues = {
      "email":username.value,
      "password":password.value,
    }
    console.log(formValues)
    const response=await fetch(url+"api/user/login",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({...formValues})
    }
    )
    
    const resJSON = await response.json();
    if(!!resJSON.clubId){
      setGlobalState({
        isauth:true,
        clubId:resJSON.clubId
      })
    }
    if(!!resJSON.coeId){
      setGlobalState({
        isauth:true,
        coeId:resJSON.coeId
      })
    }
    else{
      notification.error({
        message: `Your Email or Password is incorrect`,
        description: `Please enter the correct crudentials given by the Admin`,
        placement:'topRight'
      })
    }
  
  }
  

  
   
    return (
      <div className="Login ">
        
      <center>
      <div className="form">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/><br/><br/><br/>
            <form onSubmit={onsubmit}>
            <img src={un} height="25px"/>  <input onChange={handleUsernameChange} className="o" type="text" placeholder="Username"/><br/><br/>
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
