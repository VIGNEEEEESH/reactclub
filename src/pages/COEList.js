<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import One from "../components/club_logos/one.png";
import Two from "../components/club_logos/two.png";
import Three from "../components/club_logos/three.png";
import Five from "../components/club_logos/five.jpeg.jpg";
import Seven from "../components/club_logos/seven.png";
import Nine from "../components/club_logos/nine.png";
import Ten from "../components/club_logos/ten.png";
import Fifteen from "../components/club_logos/fifteen.png";
import Sixteen from "../components/club_logos/sixteen.png";
import TwentyOne from "../components/club_logos/twentyOne.png";
import TwentyFour from "../components/club_logos/twentyFour.jpeg";
import "../Css files/COEList.css";
import { useNavigate, Link } from "react-router-dom";
import url from "../Baseurl";

const COEList = () => {
  const [coeList, setCoeList] = useState([]);

  useEffect(() => {
    const setCOEList = async () => {
      const response = await fetch(url + "api/coe");
      const resJSON = await response.json();
      setCoeList(resJSON);
    };
    setCOEList();
  }, []);

  return (
    <div className="COEList">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/ignite.html">
                {" "}
                <img src={One} className="card-img-top" alt="..." />{" "}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Ignite Club</h5>
              </div>
            </div>
          </div>
          {coeList.map((coe) => (
            <div className="col">
              <div className="card">
                <Link to="./student_initiatives/ignite.html">
                  {" "}
                  <img
                    src={url + `api/coe/${coe.id}/image/logo`}
=======
import React, { useEffect, useState } from "react"

import "../Css files/COEList.css"
import {useNavigate, Link, useParams} from "react-router-dom"
import url from "../Baseurl";

const COEList = () => {
  const [coesList, setCoesList] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getCoesListFromDB = async () => {
      const response = await fetch(url + `api/school/${params.schoolId}/clubs`);
      const resJSON = await response.json();
      setCoesList(resJSON);
      console.log(resJSON);
    };

    getCoesListFromDB();
  }, []);

  return (
    <div className="SpecificClubList">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {coesList.map((club) => (
            <div className="col">
              <div className="card">
                <Link to={"/ClubPage/" + club.clubId}>
                  {" "}
                  <img
                    src={url + `api/club/${club.clubId}/image/logo`}
>>>>>>> Stashed changes
                    className="card-img-top"
                    alt="..."
                  />{" "}
                </Link>
                <div className="card-body">
<<<<<<< Updated upstream
                  <h5 className="card-title">{coe.name}</h5>
=======
                  <center>
                    <h4
                      style={{
                        fontFamily: "CourierNewPS-ItalicMT",
                        fontWeight: "bold",
                      }}
                    >
                      {club.clubName}
                    </h4>
                  </center>
>>>>>>> Stashed changes
                </div>
              </div>
            </div>
          ))}
<<<<<<< Updated upstream
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/cultural.html">
                {" "}
                <img src={Two} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Cultural Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/h5aparazzi.html">
                {" "}
                <img src={Three} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Paparazzi Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/film.html">
                {" "}
                <img src={Five} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Film Club</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/music.html">
                {" "}
                <img src={Seven} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Music Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/literature.html">
                {" "}
                <img src={Nine} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Literature Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/dance.html">
                {" "}
                <img src={Ten} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Dance Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/debate.html">
                {" "}
                <img src={Fifteen} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Debate Club</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <img src={Sixteen} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gaming Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/krida.html">
                {" "}
                <img src={TwentyOne} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Krida Club</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to="./student_initiatives/lingo.html">
                {" "}
                <img src={TwentyFour} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Lingo Club</h5>
              </div>
            </div>
          </div>
=======
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};
export default COEList;
