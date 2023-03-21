import React, { useEffect, useState } from "react";
import logo from "../../components/club_logos/twelve.png";
import { Dropdown } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../../Css files/ClubPage.css";
import P from "../../components/images/PTechnology.jpg";
import VP from "../../components/images/VTechnology.jpg";
import { useParams } from "react-router-dom";
import url from "../../Baseurl";
function ClubPage(props) {
  const [boxCount, setBoxCount] = useState(0);

  const addBox = () => {
    setBoxCount(boxCount + 1);
  };

  const removeBox = () => {
    if (boxCount > 0) {
      setBoxCount(boxCount - 1);
    }
  };
  const onsubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(url + "/api/club/{clubId}", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const { clubId } = useParams();
  useEffect(() => {
    const getClubFromDB = async () => {
      const response = await fetch(url + `api/club/${clubId}`);
      const resJSON = await response.json();
      setClubInfo(resJSON);
    };

    getClubFromDB();
  }, []);
  const [clubInfo, setClubInfo] = useState({});
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      title: title,
      date: date,
      description: description,
      image:image,
      time:time,
    };
    setEvents([...events, newEvent]);
    setTitle("");
    setDate("");
    setDescription("");
    setImage("");
    setTime("");
  };

  const handleDeleteEvent = (eventIndex) => {
    setEvents(events.filter((event, index) => index !== eventIndex));
  };

  return (
    <div className="Tech">
      <CardGroup>
        <div className="One">
          <Card className="cardGroup">
            <img
              variant="top"
              src={url + `api/club/${clubId}/image/logo`}
              id="Twelve"
              width="100%"
            />
          </Card>
        </div>
        <Card className="cardGroup">
          <Card.Body>
            <div className="misso">
              <Card className="mission">
                <Card.Body>
                  <Card.Title>
                    <b>Mission</b>
                  </Card.Title>
                  <p>{clubInfo.mission}</p>
                </Card.Body>
              </Card>
            </div>
            <Card className="vision">
              <Card.Body>
                <Card.Title>
                  <b>Vision</b>
                </Card.Title>
                <p>{clubInfo.vision}</p>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />

      <div className="presidents">
        <br />
        <br />
        <center>
          <div className="card-group d-flex align-items-center justify-content-center">
            <div className="ab ">
              <div className="card " id="PR">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>President</b>
                  </h5>
                  <p className="card-text">{clubInfo.presidentName}</p>
                </div>
              </div>
            </div>
            <div className="cd">
              <div className="card" id="VR">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Vice-President</b>
                  </h5>
                  <p className="card-text">{clubInfo.vicePresidentName}</p>
                </div>
              </div>
            </div>
          </div>
        </center>
        <br />
        <br />
      </div>
      <div className="calendar">
        <div className="calendar-header">
          <h2
            style={{ fontFamily: "CourierNewPS-ItalicMT", fontWeight: "bold",padding:"10px" }}
          >
            Event Calendar
          </h2>
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
             <input type="file" onChange={(e) => setImage(e.target.value)} accept="image/png, image/jpeg,.jpg"></input>
            <input
              type="date"
              placeholder="Event Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input type="time" onChange={(e) => setTime(e.target.value)}/>
            <textarea
              placeholder="Event Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea><br/>
          
          
          

            <button type="submit">Add Event</button>
          </form>
        </div>
        <br />
        <div className="calendar-body">
          {events.map((event, index) => (
            <div
              key={index}
              className="event"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <h4
                style={{
                  fontFamily: "CourierNewPS-ItalicMT",
                  fontWeight: "bold",
                }}
              >
                {event.title}
              </h4>
               <img src={event.image} />
              <p
                style={{
                  fontFamily: "CourierNewPS-ItalicMT",
                  fontWeight: "bold",
                }}
              >
                {event.date}
              </p>
              <p
                style={{
                  fontFamily: "CourierNewPS-ItalicMT",
                  fontWeight: "bold",
                }}
              >
                {event.time}
              </p>
              <textarea
                style={{
                  fontFamily: "CourierNewPS-ItalicMT",
                  fontWeight: "bold",
                  width: "720px",
                  height: "100px",
                }}
                value={event.description}
              ></textarea>
              
              <br />
              <button onClick={() => handleDeleteEvent(index)}>Delete</button>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />

      <div>
        <center>
          <p id="pic">
            <u>
              <b>PICTURE GALLERY</b>
            </u>
          </p>
        </center>
        <center>
          <button type="button" className="btn btn-dark" onClick={addBox}>
            <b>Add Event</b>
          </button>
          &emsp;
          <button type="button" className="btn btn-dark" onClick={removeBox}>
            <b>Remove Event</b>
          </button>
        </center>

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
export default ClubPage;
