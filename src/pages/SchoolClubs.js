import React, { useEffect, useState } from "react";
import {useNavigate, Link, Router, Await} from "react-router-dom"
import MOne from "../components/schools/school/1.png"
import MTwo from "../components/schools/school/2.png"
import MThree from "../components/schools/school/3.png"
import MFour from "../components/schools/school/4.png"
import MFive from "../components/schools/school/5.png"
import Twelve from "../components/club_logos/twelve.png"
import Four from "../components/club_logos/four.png"
import Eleven from "../components/club_logos/eleven.png"
import TwentyThree from "../components/club_logos/twentyThree.jpg"
import TwentyTwo from "../components/club_logos/twentyTwo.png"
import Six from "../components/club_logos/six.png"
import Twenty from "../components/club_logos/twenty.jpg"
import Eighteen from "../components/club_logos/eighteen.png"
import Eight from "../components/club_logos/eight.png"
import Fourteen from "../components/club_logos/fourteen.png"
import Nineteen from "../components/club_logos/nineteen.png"
import "../Css files/Sclub.css"
import { Dropdown } from "react-bootstrap";
import { Card, Select,Space } from "antd";
import url from '../Baseurl'
import Tech from "./School_Clubs/ClubPage";
import dropdown from "../components/images/dropdown.png"



function SchoolClubs() {
  const [schoolsList, setSchoolsList] = useState([])
  const [clubsList, setClubsList] = useState([])
  const navigate = useNavigate();
function tech(){
  navigate("/ClubPage")
}
  useEffect(() => {
  const getSchoolsListFromDB = async () => {
    const response = await fetch(url + "api/school/", {
      method: "GET"
    })
    const resJSON =await response.json();
    console.log(await resJSON)
    console.log(resJSON)
    setSchoolsList([...(await resJSON)])
    
    
    await resJSON.forEach(getClubsListFromDB)
  }
  
  const getClubsListFromDB = async (school) => {
    const schoolId=await school.schoolId
    const response = await fetch(url + `api/school/${schoolId}/clubs`, {
      method: "GET"
    })
    const resJSON = await response.json();
    console.log(await resJSON)
    setClubsList(...clubsList,{ clubs: [...(await resJSON)], schoolId: schoolId, schoolName: school.schoolName})
    
  }
  
  getSchoolsListFromDB();
  
    }, [])


const onsubmit = async (event) =>{
  event.preventDefault();
  const response=await fetch(url+"/api/club/",{
    method:"GET"
    
  
  })  
  }

        return(
            <center>
            <div className="Sclub">
                
               <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark">
      
    <Card   style={{ height:"150px",fontFamily: 'League Spartan'}}>
     <h1>School of technology</h1>
      
      <img id="dropdown" src={dropdown} height="47px" />
    </Card>
  
  

        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item > <img src={Twelve} onClick={tech} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Technology Club</h4></center></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark" >
        <Card   style={{ height:"150px",fontFamily: 'League Spartan'}}>
     <h1>School of technology</h1>
      
      <img id="dropdown" src={dropdown} height="47px" />
    </Card>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{height:"450px",overflowY:"auto"}}>
          <Dropdown.Item href="#"><img src={Four}  height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>AI & Robotics Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Eleven} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Tantra Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={TwentyThree} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Humanique Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={TwentyTwo} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Finwiz Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Six} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Crowdcore Club</h4></center></Dropdown.Item>
        
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark" >
        <Card   style={{ height:"150px",fontFamily: 'League Spartan'}}>
     <h1>School of technology</h1>
      
      <img id="dropdown" src={dropdown} height="47px" />
    </Card>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{height:"450px",overflowY:"auto"}}>
          <Dropdown.Item href="#"><img src={Eighteen}  height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Fashion Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Eight} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Interior Design Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Fourteen} height="300px"/><center><h5 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Visual Communication Club</h5></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Nineteen} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Product Design Club</h4></center></Dropdown.Item>
        
        </Dropdown.Menu>
      </Dropdown>
     
<div className="Five">
      <Dropdown className="d-inline mx-2 ">
        <Dropdown.Toggle variant="dark">
        <Card   style={{ height:"150px",fontFamily: 'League Spartan'}}>
     <h1>School of technology</h1>
      
      <img id="dropdown" src={dropdown} height="47px" />
    </Card>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">None</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark">
        <Card   style={{ height:"150px",fontFamily: 'League Spartan'}}>
     <h1>School of technology</h1>
      
      <img id="dropdown" src={dropdown} height="47px" />
    </Card>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#"><img src={Twenty} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Skribble Club</h4></center></Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      </div>
     
              </div>
              </center>
   
        );
    
}
export default SchoolClubs
