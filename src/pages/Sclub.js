import React from "react";
import {useNavigate, Link, Router} from "react-router-dom"
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
import { Select } from "antd";
import Tech from "./School_Clubs/Tech";


function Sclub() {
  const navigate = useNavigate();
function tech(){
  navigate("/clubs/1")

}
async function fetchData(id) {
  try {
    const response = await fetch(`https://example.com/api/club/${id}`, {
      method: 'GET'
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

        return(
            <center>
            <div className="Sclub">
                
               <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark">
         <img src={MOne} height="310px"/>

        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item > <img src={Twelve} onClick={tech} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Technology Club</h4></center></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      

      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark" >
        <img src={MTwo} height="310px"/>
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
        <img src={MFour} height="310px"/>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{height:"450px",overflowY:"auto"}}>
          <Dropdown.Item href="#"><img src={Eighteen}  height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Fashion Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Eight} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Interior Design Club</h4></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Fourteen} height="300px"/><center><h5 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Visual Communication Club</h5></center></Dropdown.Item>
          <Dropdown.Item href="#"><img src={Nineteen} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Product Design Club</h4></center></Dropdown.Item>
        
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="dark">
        <img src={MThree} height="310px"/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#"><img src={Twenty} height="300px"/><center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Skribble Club</h4></center></Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
<div className="Five">
      <Dropdown className="d-inline mx-2 ">
        <Dropdown.Toggle variant="dark">
         <img src={MFive} height="310px"/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">None</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
     
              </div>
              </center>
   
        );
    
}
export default Sclub
