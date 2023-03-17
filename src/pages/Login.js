import React, { useState } from 'react';
import "../Css files/Login.css";
import un from "../components/images/user.png"
import pw from "../components/images/pw.png"
import bg from "../components/images/light rays.png"

import loginImg from '../components/images/robot.png'


function Login() {
  
  
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
            <form>
            <img src={un} height="25px"/>  <input className="o" type="text" placeholder="Username"/><br/><br/>
            <img src={pw} height="25px"/>    <input className="o" type="password" id="myInput"  placeholder="Password"/><br/><br/>
            <input type="checkbox" id="showImageButton" onClick={myFunction}/>&nbsp; Show Password <br/><br/>
            <input type="submit"/>
            </form>
          </div>
        </div>
          </center>
          
         
       
      </div>
    );
    
  }




export default Login;
