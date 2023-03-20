import React, { useEffect, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import AAD from '../components/images/COEorg3.png';
import '../Css files/COEp.css';
import { useParams } from 'react-router-dom';

const COEpage = () => {
    const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const removeBox = () => {
    if (boxCount > 0) {
      setBoxCount(boxCount - 1);
    }
  };
  const {id}=useParams()
  useEffect(() => {
    console.log(id)
  
  }, [])
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      title: title,
      date: date,
      description: description,
    };
    setEvents([...events, newEvent]);
    setTitle("");
    setDate("");
    setDescription("");
  };

  const handleDeleteEvent = (eventIndex) => {
    setEvents(events.filter((event, index) => index !== eventIndex));
  };



    return(
    <div className="AAD">
    <CardGroup >
        <div className="One">
<Card className="cardGroup" style={{ border: "none", boxShadow: "none" }}>

<img variant="top" src={AAD} alt="COE logo" id="Twelve" width="70%"/>

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
<div className="calendar">
      <div className="calendar-header">
        <h2 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>Event Calendar</h2>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            placeholder="Event Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <textarea
            placeholder="Event Description"
            value={description}
            
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" >Add Event</button>
        </form>
      </div><br/>
      <div className="calendar-body">
        {events.map((event, index) => (
          <div key={index} className="event" style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
            <h4 style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>{event.title}</h4>
            <p style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold"}}>{event.date}</p>
            <textarea style={{fontFamily:"CourierNewPS-ItalicMT",fontWeight:"bold",width:"720px", height:"100px"}} value={event.description} ></textarea><br/>
            <button onClick={() => handleDeleteEvent(index)}>Delete</button><br/><br/>
            </div>
          
        ))}
      </div>
    </div>
<br/><br/><br/>

<div>
<center><p id="pic"><u><b>PICTURE GALLERY</b></u></p></center>
<center><button type="button" className="btn btn-dark" onClick={addBox}><b>Add Event</b></button>&emsp;
<button type="button" className="btn btn-dark" onClick={removeBox}><b>Remove Event</b></button></center>

<div className="container">
        <div className="box1">
          <img src="" alt="img" />
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
export default COEpage;
