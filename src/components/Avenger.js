import React from "react";
import {
  useParams,
  useRouteMatch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import Movies from "./Movies";

const Avenger = ({ hero }) => {
  const params = useParams();
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const heros = hero.find((item) => item.id === Number(params.hero));
  return (
    <div className="characters-list-wrapper">
      <div className="character-card">
        <h2>{heros.name}</h2>
        <h4>{heros.nickname}</h4>
        <p>{heros.description}</p>
        <img src={heros.thumbnail} alt="random avengers img" />
        <nav className="nav-buttons">
          <NavLink to={`${url}/movies`}>Movie List</NavLink>
          <span>
            <button
              className="go-back-btn"
              type="button"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </span>
        </nav>
        <Route path={`${path}/movies`}>
          <Movies movielist={heros} />
        </Route>
      </div>
    </div>
  );
};

export default Avenger;
