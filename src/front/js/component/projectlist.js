import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/card.css";
import { Card } from "../component/cards";

export const ProjectList = (props) => {
  const { store, actions } = useContext(Context);
  const [query, setQuery] = useState({
    search: "",
    isTracking: false,
    stage: "0",
    type: "0",
  });

  const filterProject = (project) => {
    if (project.tracked_list.length === 0 && query.isTracking == "true") {
      return false;
    }
    if (query.stage !== "0" && project.project_stage !== query.stage) {
      return false;
    }
    if (query.type !== "0" && project.project_type !== query.type) {
      return false;
    }
    // if (
    //   props.query.search !== "" &&
    //   props.query.search
    //     .toLocaleLowerCase()
    //     .includes(query.search.toLocaleLowerCase())
    // ) {
    //   return false;
    // }
    return true;
  };
  return (
    <div class="album py-5 bg- primary">
      <div>
        <select
          className="form-select-sm m-3"
          aria-label="Filter"
          onChange={(e) => {
            setQuery({ ...query, isTracking: e.target.value });
          }}
        >
          <option value={false}>All</option>
          <option value={true}>Tracked</option>
        </select>
        <select
          className="form-select-sm m-3"
          aria-label="Filter2"
          onChange={(e) => {
            setQuery({ ...query, stage: e.target.value });
          }}
        >
          <option value={0}>IC/GB/Ended</option>
          <option value="interestcheck">Interest Check</option>
          <option value="groupbuy">Group Buy</option>
          <option value="ended">Ended</option>
        </select>
        <select
          className="form-select-sm m-3"
          aria-label="Filter3"
          onChange={(e) => setQuery({ ...query, type: e.target.value })}
        >
          <option value={0}>Keycap/Keyboard/Switch</option>
          <option value="keycap">Keycaps</option>
          <option value="keyboard">Keyboards</option>
          <option value="switches">Switches</option>
        </select>
      </div>
      <div
        className="d-flex flex-row mx-auto"
        style={{ width: "90%", overflow: "auto" }}
      >
        {store.projects
          .filter(filterProject)
          .map((c, i) => <Card key={i} data={c} />).length === 0 ? (
          <h1 className="m-auto">No Projects Detected</h1>
        ) : (
          store.projects
            .filter(filterProject)
            .map((c, i) => (
              <Card
                data={c}
                id={c.id}
                name={c.name}
                project_type={c.project_type}
                sale_type={c.sale_type}
                started_at={c.started_at}
                ended_at={c.ended_at}
                img={c.img_url}
                details={c.details}
                key={i}
              />
            ))
        )}
      </div>
    </div>
  );
};
