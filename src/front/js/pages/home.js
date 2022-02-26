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
      {/* <div
        className="d-flex flex-row mx-auto"
        style={{ width: "90%", overflow: "auto" }}
      >
        {store.projects.map((c, i) => (
          // <Card
          //   data={c}
          //   id={store.projects[i].id}
          //   name={store.projects[i].name}
          //   project_type={store.projects[i].project_type}
          //   hair_color={store.projects[i].hair_color}
          //   eye_color={store.projects[i].eye_color}
          //   img={store.projects[i].img_url}
          //   details={store.projects[i].details}
          //   key={i}
          // />
        // ))}
      </div> */}
    </div>
  );
};
