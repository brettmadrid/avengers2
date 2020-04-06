import React from "react";
import { Link } from "react-router-dom";

const AvengersList = (props) => {
  return (
    <div className="items-list-wrapper">
      {props.hero.map((avenger) => (
        <div className="characters-list-wrapper">
          <Link to={`/avengers/${avenger.id}`}>
            <div className="character-card">
              <img src={avenger.thumbnail} alt="random avengers img" />
              <p>{avenger.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AvengersList;
