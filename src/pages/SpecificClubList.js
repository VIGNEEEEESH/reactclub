import React from "react"
import One from "../components/club_logos/one.png"

import "../Css files/SpecificClubList.css"
import {useNavigate, Link} from "react-router-dom"

class SpecificClubList extends React.Component{
    render(){
        return(
            <div className="SpecificClubList">




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
  
</div>
</div>











  
    </div >
    
    );
    }
}
export default SpecificClubList
