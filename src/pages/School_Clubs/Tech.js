import React, { useEffect } from "react"
import logo from "../../components/club_logos/twelve.png"
import { Dropdown } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../../Css files/Tech.css"
import P from "../../components/images/PTechnology.jpg"
import VP from "../../components/images/VTechnology.jpg"
import { useParams } from "react-router-dom";
function Tech(props){
  const {id}=useParams()
  useEffect(() => {
    console.log(id)
  
  }, [])
  
    
        return(
            <div className="Tech">
            <CardGroup >
                <div className="One">
      <Card className="cardGroup">
        
        <img variant="top" src={logo} id="Twelve" width="100%"/>
        
      </Card>
      </div>
      <Card className="cardGroup">
        
        <Card.Body >
        <div className="misso">
        <Card className="mission">
        <Card.Body >
         <Card.Title><b>Mission</b></Card.Title>
        
         
       </Card.Body>
       </Card>
        </div>
        <Card className="vision">
        <Card.Body >
         <Card.Title><b>Vision</b></Card.Title>
        
         
       </Card.Body>
       </Card>
        </Card.Body >
      </Card>
    </CardGroup>
    <br/>


<div className="presidents">
  <br/><br/>
  <center>
    <div className="card-group d-flex align-items-center justify-content-center">
      <div className="ab ">
  <div className="card " id="PR">
    
    <img className="card-img-top"   src={P} alt="Card image cap" height="170px" />

    <div className="card-body">
      <h5 className="card-title"><b>President</b></h5>
      <p className="card-text">Akash Gurrala</p>
    </div>
  </div>
  </div>
  <div className="cd">
  <div className="card" id="VR">
    
    <img className="card-img-top"  src={VP} alt="Card image cap" height="170px" />
    
    <div className="card-body">
    <h5 className="card-title"><b>Vice-President</b></h5>
      <p className="card-text">Aditi Baggu</p>
    </div>
  </div>
  </div>
</div>
</center>
<br/><br/>
</div>


<div className="container">
                <div className="box">
                  <img src="https://source.unsplash.com/1000x800"/>
                  <span>CSS</span>
                </div>
                <div className="box">
                  <img src="https://source.unsplash.com/1000x802"/>
                  <span>Image</span>
                </div>
                <div className="box">
                  <img src="https://source.unsplash.com/1000x804"/>
                  <span>Hover</span>
                </div>
                <div className="box">
                  <img src="https://source.unsplash.com/1000x806"/>
                  <span>Effect</span>
                </div>
              </div>
   </div>
    
        );
    
}
export default Tech