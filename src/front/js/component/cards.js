import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useParams, useHistory } from "react-router-dom";
import { DetailedView } from "../pages/detailedView.js";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const session = actions.getCurrentSession();
  const history = useHistory();

  // Date Display Function
  let start_date = props.data.started_at;
  if (start_date !== null) {
    start_date =
      start_date.split(" ")[0] +
      " " +
      start_date.split(" ")[2] +
      " " +
      start_date.split(" ")[1] +
      " " +
      start_date.split(" ")[3];
  }
  let end_date = props.data.ended_at;
  if (end_date !== null) {
    end_date =
      end_date.split(" ")[0] +
      " " +
      end_date.split(" ")[2] +
      " " +
      end_date.split(" ")[1] +
      " " +
      end_date.split(" ")[3];
  }

  return (
    <div
      className="card p-0 me-3 mb-4"
      style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}
    >
      <img
        src={props.data.img_url || "https://via.placeholder.com/400x200"}
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
        <p className="card-text fw-bold">Start Date: {start_date}</p>
        <p className="card-text fw-bold">End Date: {end_date}</p>
        <Link to={"/details/" + props.id} params={props.data}>
          <button
            className="btn btn-outline-primary float-start"
            onClick={() => actions.getProject(props.id)}
          >
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
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  baseprice: PropTypes.number,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  details: PropTypes.string,
};
