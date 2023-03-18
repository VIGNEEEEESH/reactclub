import React, { Component, useState } from 'react'
import url from '../Baseurl'
import "../Css files/Addp.css"

function Addp() {
  
  const [ss,setSs]=useState("True")
  const [clubName, setClubName] = useState("")
  const [clubMission, setClubMission] = useState("")
  const [clubVision, setClubVision] = useState("")
  const [clubPresident, setClubPresident] = useState("")
  const [clubVicePresident, setClubVicePresident] = useState("")
  const [clubPresidentEmail, setClubPresidentEmail] = useState("")
  const [clubPassword, setClubPassword] = useState("")
  const [clubUniversity, setClubUniversity] = useState("")
  const [clubSchool, setClubSchool] = useState("")
  const [clubSchools, setClubSchools] = useState("")
  function Schools(){
      setSs("False")
  }

  const handleClubNameChange = (event) => {
    setClubName({value: event.target.value})
  }
  const handleClubMissionChange = (event) => {
    setClubMission({value: event.target.value})
  }
  const handleClubVisionChange = (event) => {
    setClubVision({value: event.target.value})
  }
  const handleClubPresidentChange = (event) => {
    setClubPresident({value: event.target.value})
  }
  const handleClubVicePresidentChange = (event) => {
    setClubVicePresident({value: event.target.value})
  }
  const handleClubPresidentEmailChange = (event) => {
    setClubPresidentEmail({value: event.target.value})
  }
  const handleClubPasswordChange = (event) => {
    setClubPassword({value: event.target.value})
  }
  const handleClubUniversityChange = (event) => {
    setClubUniversity({value: event.target.value})
  }
  const handleClubSchoolChange = (event) => {
    setClubSchool({value: event.target.value})
  }
  const handleClubSchoolsChange = (event) => {
    setClubSchools({value: event.target.value})
  }

  const onsubmit = async (event) =>{
      event.preventDefault();
      console.log(clubName)
      const formValues = {
        "clubName": clubName.value,
        "clubMission": clubMission.value,
        "clubVision":clubVision.value,
        "clubPresident":clubPresident.value,
        "clubVicePresident":clubVicePresident.value,
        "clubPresidentEmail":clubPresidentEmail.value,
        "clubPassword":clubPassword.value,
        "clubPUniversity":clubUniversity.value,
        "clubSchool":clubSchool.value,
        "clubSchools":clubSchools.value,
      }
      const response=await fetch(url+"api/user/",{
        method:"POST"
      })
  }
    return (
      <div className="Addp">
        <center>
      <div className="rectangle">
        <form onSubmit={onsubmit}>
          <br/>
            <label>Name of the Club: &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input onChange={handleClubNameChange} type="text" id="nc" required/><br/><br/>

            <label>Mission of the Club: &nbsp;</label>
            <textarea onChange={handleClubMissionChange} required/><br/><br/>

            <label>Vision of the Club: &nbsp;&nbsp;</label>
            <textarea onChange={handleClubVisionChange} required/><br/><br/>

            <label>Name of the : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input onChange={handleClubPresidentChange} type="text" placeholder='President' required/><br/><br/>

            <label>Name of the : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input onChange={handleClubVicePresidentChange} type="text" placeholder='Vice-President' required/><br/><br/>

            <label>Email-ID of the : &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input onChange={handleClubPresidentEmailChange} type="text" placeholder='President' required/><br/><br/>
            <label>Create a password : &nbsp;&nbsp;</label>
            <input onChange={handleClubPasswordChange} type="password" required/><br/><br/>

            <label>Select the type of the Club: &nbsp;</label><br/>
            <input onChange={handleClubUniversityChange} type="radio"  name="school" value="University Level" required/>&nbsp;
            <label > University Level</label>&emsp;
            <input onChange={handleClubSchoolChange} type="radio" name="school" value="School Level" required/>&nbsp;
            <label onClick={Schools}>School Level</label><br/><br/>
            <select onChange={handleClubSchoolsChange} hidden={ss} required>
              <option>School of Technology</option>
              <option>School of Business</option>
              <option>School of Architechture</option>
              <option>School of Design</option>
              <option>School of Humanities and Laws</option>
              
            </select>
          <label style={{display:"inline"}}> Upload Club's Logo:</label> <input style={{display:"inline"}}type="file" required/>
<input type="submit" value="button"></input>
            
        </form>
       </div>
       </center>
      </div>
    )
  }

export default Addp
