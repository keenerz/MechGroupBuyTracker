import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Context } from "/workspace/MechGroupBuyTracker/src/front/js/store/appContext.js";
import { Link, useParams } from "react-router-dom";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div
      className="card p-0 me-3 mb-4"
      style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}
    >
      <img
        src={props.img || "https://via.placeholder.com/400x200"}
        className="card-img-top"
        height="200"
        width="400"
      />
      <div className="card-body p-3">
        <h5 className="card-title text-center px-3 py-0">{props.name}</h5>
        <p className="card-text">Base Price: {props.price}</p>
        <p className="card-text">Start Date: {props.start_date}</p>
        <p className="card-text">End Date: {props.end_date}</p>
        <Link to={`/character/${props.uid}`}>
          <button className="btn btn-outline-primary">Learn more!</button>
        </Link>
        <button
          className="btn btn-outline-warning float-end"
          onClick={() => {
            actions.addTracking(props.data);
          }}
        >
          {props.favStatus === true ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
      </div>
    </div>
  );
};

CharacterCards.propTypes = {
  uid: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  eye_color: PropTypes.string,
  favStatus: PropTypes.bool,
  details: PropTypes.string,
};
