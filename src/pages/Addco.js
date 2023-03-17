import React, { Component } from 'react'
import "../Css files/Addco.css"
function Addco() {
  
  
    return (
      <div className="Addco">
        <center>
      <div className="rectangle">
        <form>
          <br/>
            <label>Name of the COE: &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" /><br/><br/>

            <label>Mission of the COE: &nbsp;</label>
            <textarea  /><br/><br/>

            <label>Vision of the COE: &nbsp;&nbsp;</label>
            <textarea  /><br/><br/>

            <label>Name of the : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='Mentor'/><br/><br/>

            <label>Name of the : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='Co-Founder'/><br/><br/>

            <label>Email-ID of the : &nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='Co-Founder'/><br/><br/>
            <label>Create a password : &nbsp;</label>
            <input type="password" /><br/><br/>

            
          <label style={{display:"inline"}}> Upload COE's Logo:</label> <input style={{display:"inline"}}type="file"/>

            
        </form>
       </div>
       </center>
      </div>
    )
  }

export default Addco
