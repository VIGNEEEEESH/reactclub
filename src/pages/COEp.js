import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import AAD from '../components/images/COEorg3.png';
import '../Css files/COEp.css';

const Coe = () => {
    const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const removeBox = () => {
    if (boxCount > 0) {
      setBoxCount(boxCount - 1);
    }
  };


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
</div><br/><br/><br/>

<div>
<center><p id="pic"><u><b>PICTURE GALLERY</b></u></p></center>
<center><button type="button" className="btn btn-dark" onClick={addBox}><b>Add Event</b></button>&emsp;
<button type="button" className="btn btn-dark" onClick={removeBox}><b>Remove Event</b></button></center>

<div className="container">
        <div className="box1">
          <img src=""/>
          <span></span>
        </div>
        {Array.from({ length: boxCount }).map((_, index) => (
        <div className="box1" key={index}></div>
      ))}
        </div>   
</div>
</div>
);

}
export default Coe;
