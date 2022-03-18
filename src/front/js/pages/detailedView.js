import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailedview.css";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const DetailedView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [project, setProject] = useState({});
  const local = JSON.parse(localStorage.getItem("projectedit"));

  const session = actions.getCurrentSession();
  let project_stage = "";
  if (project?.project_stage === "interestcheck") {
    project_stage = "Interest Check";
  } else if (project?.project_stage === "groupbuy") {
    project_stage = "Group Buy";
  } else if (project?.project_stage === "ended") {
    project_stage = "Ended";
  }
  let project_type = "";
  if (project?.project_type === "keycap") {
    project_type = "Keycap";
  } else if (project?.project_type === "keyboard") {
    project_type = "Keyboard";
  } else if (project?.project_type === "switches") {
    project_type = "Switches";
  }

  //Date Display Function
  let start_date = "";
  if (local?.started_at !== null) {
    start_date =
      local?.started_at.split(" ")[0] +
      " " +
      local?.started_at.split(" ")[2] +
      " " +
      local?.started_at.split(" ")[1] +
      " " +
      local?.started_at.split(" ")[3];
  }
  let ended_date = "";
  if (local?.ended_at !== null) {
    ended_date =
      local?.ended_at.split(" ")[0] +
      " " +
      local?.ended_at.split(" ")[2] +
      " " +
      local?.ended_at.split(" ")[1] +
      " " +
      local?.ended_at.split(" ")[3];
  }
  useEffect(() => {
    setProject(local);
  }, []);

  return (
    <div className="card mb-3  w-100">
      <div className="row g-0">
        <div className="col-md-4" id="leftSide">
          <img
            src={local?.img_url || "https://via.placeholder.com/400x200"}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8" id="rightSide">
          <div className="card-body">
            <h5 className="card-title">{project?.name}</h5>
            <p className="card-text fw-bold fw-bold">
              Project Type: {project_type}
            </p>
            <p className="card-text fw-bold fw-bold">
              Project Stage: {project_stage}
            </p>
            <p className="card-text fw-bold fw-bold">
              Sale Type: {project?.sale_type}
            </p>
            <p className="card-text fw-bold fw-bold">
              Base Price (USD): ${project?.baseprice}
            </p>
            <p className="card-text fw-bold fw-bold">
              Estimated Shipping Date: {project?.estimated_ship}
            </p>
            <p className="card-text fw-bold">Start Date: {start_date}</p>
            <p className="card-text fw-bold">End Date: {ended_date}</p>
            <p className="card-text fw-bold">
              Vendors:{" "}
              {local?.vendor_links
                ? local?.vendor_links.split(", ").join(" || ")
                : ""}
            </p>
            <p className="card-text fw-bold">
              Discussion Link:{" "}
              {local?.discussion_links ? (
                <a href={local?.discussion_links}>{local?.discussion_links}</a>
              ) : (
                ""
              )}
            </p>
            {session ? (
              <Link to={`/projectedit/${project?.id}`}>
                <button>edit</button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DetailedView.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  base_price: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  trackedStatus: PropTypes.bool,
  details: PropTypes.string,
};
