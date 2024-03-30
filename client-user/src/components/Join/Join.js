import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h2 className="heading">
          <img
            className="logo"
            src="https://i.pinimg.com/originals/09/e2/cd/09e2cd8d3a83b6e9cd4dc5d0d703a575.png"
            alt="logo"
          />
          ChatGram
        </h2>
        <div>
          <input
            placeholder="Name"
            className="joinInput input-box"
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20 input-box"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          ></input>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Join Chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
