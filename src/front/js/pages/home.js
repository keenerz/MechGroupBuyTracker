import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/cards";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Group Buy Tracker (working title)</h1>
      <div>
        <select className="form-select-sm m-3" aria-label="Filter">
          <option selected>Tracked/All</option>
          <option value="untracked">All</option>
          <option value="tracked">Tracked</option>
        </select>
        <select
          className="form-select-sm m-3"
          aria-label="Default select example"
        >
          <option selected>IC/GB/Ended</option>
          <option value="interestcheck">Interest Check</option>
          <option value="groupbuy">Group Buy</option>
          <option value="ended">Ended</option>
        </select>
        <select
          className="form-select-sm m-3"
          aria-label="Default select example"
        >
          <option selected>Keycap/Keyboard/Switch</option>
          <option value="keycaps">Keycaps</option>
          <option value="keyboards">Keyboards</option>
          <option value="switches">Switches</option>
        </select>
      </div>
      <div
        className="d-flex flex-row mx-auto"
        style={{ width: "90%", overflow: "auto" }}
      >
        {store.projects.map((c, i) => (
          <Card
            data={c}
            id={store.projects[i].id}
            name={store.projects[i].name}
            project_type={store.projects[i].project_type}
            hair_color={store.projects[i].hair_color}
            eye_color={store.projects[i].eye_color}
            img={store.projects[i].img_url}
            details={store.projects[i].details}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
