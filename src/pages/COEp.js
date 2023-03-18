import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import AAD from '../components/images/COEorg3.png';
import "../Css files/COEp.css";

  
class COEp extends React.Component{
  render(){ 
    return(
    <div className="AAD">
    <CardGroup >
        <div className="One">
<Card className="cardGroup" style={{ border: "none", boxShadow: "none" }}>

<img variant="top" src={AAD} id="Twelve" width="70%"/>

</Card>
</div>
<Card className="cardGroup" style={{ border: "none", boxShadow: "none" }}>

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


<div className="chairpersons">
<br/><br/>
<div className="cards-list">
<div className="card1">
  <div className="card_title title-white">
  <p id="co">Co-Chairpersons</p> </div>
  <div className="card_body"> <p>  </p></div>
 
</div>
</div>
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

}}
export default COEp;