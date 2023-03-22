import React, { useEffect, useState } from "react";

import "../Css files/COEList.css";
import { useNavigate, Link, Navigate } from "react-router-dom";
import url from "../Baseurl";

const COEList = () => {
  useEffect(() => {
    const getCoesList = async () => {
      const response = await fetch(url + "api/coe");
      const resJSON = await response.json();
      console.log(resJSON)
      return await resJSON;
      
    };

    

    getCoesList().then((coesList) => {
      
      setCoesList((coesList));
    });
  }, []);

  const [coesList, setCoesList] = useState([]);

  const ListPage = (entry) => {
    Navigate(`/COEpage/${entry.id}`)
  }
  return (
    <div className="Uclub">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          
            
          {coesList.map((entry) => (
            <div className="col">
              <div className="card">
                <Link to={`/COEpage/${entry.id}`}>
                  {" "}
                  <img onClick={() => ListPage(entry)}
                    src={url + `api/coe/${entry.id}/image/logo`}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <center>
                    <h4
                      style={{
                        fontFamily: "CourierNewPS-ItalicMT",
                        fontWeight: "bold",
                      }}
                    >
                      {entry.name}
                    </h4>
                  </center>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
        </div>
      
  
  );
};

export default COEList;
