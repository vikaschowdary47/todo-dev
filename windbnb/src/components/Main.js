import React from "react";
import data from "../data/stays.json";
import "./Main.css";

const Main = () => {
  return (
    <div className="main container">
      <div className="title">
        <h2>Stays in Finland</h2>
        <p>+{data.length} stays</p>
      </div>
      <div className="image__body">
        {data.map((room) => (
          <div>
            <img
              className="room__images img-fluid"
              src={room.photo}
              alt={room.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
