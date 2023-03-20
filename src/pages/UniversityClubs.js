import React from "react"
import One from "../components/club_logos/one.png"
import Two from "../components/club_logos/two.png"
import Three from "../components/club_logos/three.png"
import Five from "../components/club_logos/five.jpeg.jpg"
import Seven from "../components/club_logos/seven.png"
import Nine from "../components/club_logos/nine.png"
import Ten from "../components/club_logos/ten.png"
import Fifteen from "../components/club_logos/fifteen.png"
import Sixteen from "../components/club_logos/sixteen.png"
import TwentyOne from "../components/club_logos/twentyOne.png"
import TwentyFour from "../components/club_logos/twentyFour.jpeg"
import "../Css files/UniversityClubs.css"
import {useNavigate, Link} from "react-router-dom"

class UniversityClubs extends React.Component{
    render(){
        return(
            <div className="Uclub">




<div className="container">
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <Link to="/Ignite">  <img src={One} className="card-img-top"  alt="..."/>  </Link>
      <div className="card-body">
      <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Ignite Club</h4></center>
                </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Link to="/Cultural">         <img src={Two} className="card-img-top" alt="..."/></Link>
      <div className="card-body">
      <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Cultural Club</h4></center>
                </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Link to="/Paparazzi">    <img src={Three} className="card-img-top" alt="..."/></Link>
      <div className="card-body">
      <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Paparazzi Club</h4></center>
                </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <Link to="/Film">     <img src={Five} className="card-img-top" alt="..."/></Link>
      <div className="card-body">
      <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Film Club</h4></center>
                </div>
    </div>
  </div>
</div>
</div>




<div className="container">
  <div className="row row-cols-1 row-cols-md-4 g-4">
    <div className="col">
      <div className="card">
        <Link to="/Music">         <img src={Seven} className="card-img-top"  alt="..."/></Link>
        <div className="card-body">
        <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Music Club</h4></center>
                </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <Link to="/Literature">     <img src={Nine} className="card-img-top" alt="..."/></Link>
        <div className="card-body">
        <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Literature Club</h4></center>
                </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <Link to="/Dance">    <img src={Ten} className="card-img-top" alt="..."/></Link>
        <div className="card-body">
        <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Dance Club</h4></center>
                </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <Link to="/Debate">     <img src={Fifteen} className="card-img-top" alt="..."/></Link>
        <div className="card-body">
        <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Debate Club</h4></center>
                </div>
      </div>
    </div>
  </div>
  </div>







  <div className="container">
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card">
        <Link to="#">    <img src={Sixteen} className="card-img-top"  alt="..."/></Link>
                <div className="card-body">
                <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Gaming Club</h4></center>
                    </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <Link to="/Krida">      <img src={TwentyOne} className="card-img-top"  alt="..."/></Link>
          <div className="card-body">
          <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Krida Club</h4></center>
                    </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <Link to="/Lingo">     <img src={TwentyFour} className="card-img-top"  alt="..."/></Link>
          <div className="card-body">
          <center><h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Lingo Club</h4></center>
                    </div>
        </div>
      </div>
    </div>
    </div>
    </div >
    
    );
    }
}
export default UniversityClubs
