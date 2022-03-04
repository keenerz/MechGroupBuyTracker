import React from "react";
import { Link } from "react-router-dom";
import "../../styles/listing.css";

export const listing = () => {
  return (
    <form>
      <input
        name="name"
        type="text"
        class="feedback-input"
        placeholder="Name"
      />
      <input
        name="Region"
        type="text"
        class="feedback-input"
        placeholder="Region"
      />
      <input
        name="Price"
        type="text"
        class="feedback-input"
        placeholder="Price"
      />
      <textarea
        name="text"
        class="feedback-input"
        placeholder="Description of Product"
      ></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
