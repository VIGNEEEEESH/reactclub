import React, { Component, useState } from 'react'
import "../Css files/Addp.css"
function Addp() {
  
  const [ss,setSs]=useState("True")
  function Schools(){
      setSs("False")
  }
    return (
      <div className="Addp">
        <center>
      <div className="rectangle">
        <form>
          <br/>
            <label>Name of the Club: &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" /><br/><br/>

            <label>Mission of the Club: &nbsp;</label>
            <textarea  /><br/><br/>

            <label>Vision of the Club: &nbsp;&nbsp;</label>
            <textarea  /><br/><br/>

            <label>Name of the : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='President'/><br/><br/>

            <label>Name of the : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='Vice-President'/><br/><br/>

            <label>Email-ID of the : &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder='President'/><br/><br/>
            <label>Create a password : &nbsp;&nbsp;</label>
            <input type="password" /><br/><br/>

            <label>Select the type of the Club: &nbsp;</label><br/>
            <input type="radio"  name="school" value="University Level"/>&nbsp;
            <label > University Level</label>&emsp;
            <input type="radio" name="school" value="School Level"/>&nbsp;
            <label onClick={Schools}>School Level</label><br/><br/>
            <select hidden={ss}>
              <option>School of Technology</option>
              <option>School of Business</option>
              <option>School of Architechture</option>
              <option>School of Design</option>
              <option>School of Humanities and Laws</option>
              
            </select>
          <label style={{display:"inline"}}> Upload Club's Logo:</label> <input style={{display:"inline"}}type="file"/>

            
        </form>
       </div>
       </center>
      </div>
    )
  }

export default Addp
