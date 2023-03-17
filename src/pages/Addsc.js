import React, { useState } from 'react';
import "../Css files/Addsc.css";
import un from "../components/images/user.png"
import pw from "../components/images/pw.png"
import bg from "../components/images/light rays.png"

import loginImg from '../components/images/robot.png'


function Addsc() {
   

    return (
      <div className="Addsc ">
        
      <center>
      <div className="form">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{position: 'relative'}} alt="login"/><br/><br/><br/>
            <form>
            <h1>Name of the School</h1>  <input className="o" type="text" placeholder="Woxsen"/><br/><br/>
           
            
            <input type="submit"/>
            </form>
          </div>
        </div>
          </center>
          
         
       
      </div>
    );
    
  }




export default Addsc;
