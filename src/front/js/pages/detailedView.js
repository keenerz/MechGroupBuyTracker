import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailedview.css";
import { Card } from "../component/cards";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const DetailedView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const project = store.projectedit;
  let project_stage = "";
  if (project?.project_stage === "interestcheck") {
    project_stage = "Interest Check";
  } else if (project?.project_stage === "groupbuy") {
    project_stage = "Group Buy";
  } else if (project?.project_stage === "ended") {
    project_stage = "Ended";
  }
  console.log(project);
  return (
    <div className="card mb-3  w-100">
      <div className="row g-0">
        <div className="col-md-4" id="leftSide">
          <img
            src="https://i.imgur.com/4l88EPt.jpeg"
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8" id="rightSide">
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
              <p className="card-text fw-bold fw-bold">User: {project.user}</p>
              <p className="card-text fw-bold fw-bold">
                Item Type: {project.project_type}
              </p>
              <p className="card-text fw-bold fw-bold">
                Sale Type: {project.sale_type}
              </p>
              <p className="card-text fw-bold">Region: {project.region}</p>

              <p className="card-text fw-bold fw-bold">
                Base Price: {project.baseprice}
              </p>
              <p className="card-text fw-bold fw-bold">
                Estimated Shipping Date: {project.estimated_ship}
              </p>
              <p className="card-text fw-bold">
                Start Date: {project.start_at}
              </p>
              <p className="card-text fw-bold">End Date: {project.end_date}</p>
              <p className="card-text fw-bold fw-bold">
                Vendor Links: {project.vendor_links}
              </p>
              <p className="card-text fw-bold">
                Discussion Links: {project.discussion_links}
              </p>
              <p className="card-text fw-bold">Region: {project.region}</p>
              <p className="card-text fw-bold fw-bold">
                Base Price: {project.baseprice}
              </p>
            </p>
            <p className="card-text fw-bold">End Date: {project?.end_date}</p>
            <p className="card-text fw-bold">Stage: {props.trackedStatus}</p>
            <p className="card-text fw-bold">Region: {props.id}</p>
            <Link to={`/projectedit/${params.id}`}>
              <button>edit</button>
            </Link>
            <p className="card-text">
              <small className="text-muted">Last updated 14 mins ago</small>
            </p>
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
