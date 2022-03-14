import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/listing.css";

export const Listing = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      method="post"
      onsubmit={(e) => {
        actions.listing(name, region, price, description).then((session) => {
          e.preventDefault();
        });
      }}
    >
      <input
        id="name"
        name="name"
        type="text"
        className="feedback-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="Region"
        type="text"
        className="feedback-input"
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <input
        name="Price"
        type="text"
        className="feedback-input"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        name="text"
        className="feedback-input"
        placeholder="Description of Product"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
