import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Context } from "/workspace/MechGroupBuyTracker/src/front/js/store/appContext.js";
import { Link, useParams, useHistory } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const session = actions.getCurrentSession();
  const history = useHistory();

  return (
    <div
      className="card p-0 me-3 mb-4"
      style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}
    >
      <img
        src={props.data.img || "https://via.placeholder.com/400x200"}
        className="card-img-top"
        height="200"
        width="400"
      />
      <div className="card-body p-3">
        <h5 className="card-title text-center px-3 py-0 fw-bold">
          {props.data.name}
        </h5>
        <p className="card-text fw-bold fw-bold">
          Base Price: {props.data.baseprice}
        </p>
        <p className="card-text fw-bold">Start Date: {props.data.start_date}</p>
        <p className="card-text fw-bold">End Date: {props.data.end_date}</p>
        <Link to={"/details/" + props.id}>
          <button className="btn btn-outline-primary float-start">
            Learn more!
          </button>
        </Link>
        <button
          className="btn btn-outline-warning float-end"
          onClick={() => {
            if (!session) {
              history.push("/login");
            }
            if (props.data.tracked_list.length > 0) {
              actions.deleteTracking(props.data);
            } else {
              actions.addTracking(props.data);
            }
          }}
        >
          {!session ? (
            <i className="fas fa-user-lock"></i>
          ) : props.data.tracked_list.length > 0 ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  baseprice: PropTypes.number,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  trackedStatus: PropTypes.bool,
  details: PropTypes.string,
};
