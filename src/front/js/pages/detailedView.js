import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailedview.css";
import { Card } from "../component/cards";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const DetailedView = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams().id;

  const project = store.projects;

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://i.imgur.com/4l88EPt.jpeg"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title: {props.name}</h5>
            <p className="card-text">
              <p className="card-text fw-bold fw-bold">
                Base Price: {props.price}
              </p>
              <p className="card-text fw-bold">
                Start Date: {props.start_date}
              </p>
              <p className="card-text fw-bold">End Date: {props.end_date}</p>
              <p className="card-text fw-bold">Stage: {props.trackedStatus}</p>
              <p className="card-text fw-bold">Region: {props.id}</p>
            </p>

            <p className="card-text">
              <small className="text-muted">Last updated 14 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  base_price: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  trackedStatus: PropTypes.bool,
  details: PropTypes.string,
};
