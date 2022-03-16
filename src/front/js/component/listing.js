import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/listing.css";

export const Listing = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [description, setDescription] = useState("");
  const [estimated_ship, setEstimated_ship] = useState("");
  const [vendor_links, setVendor_links] = useState("");
  const [sale_type, setSale_type] = useState("");
  const [img_url, setimg_url] = useState("");
  const [discussion_links, setdiscussion_links] = useState("");
  const [creator, setcreator] = useState("");

  return (
    <form
      method="post"
      onSubmit={(e) => {
        actions
          .listing(name, region, basePrice, description, estimated_ship)
          .then((session) => {
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
        name="basePrice"
        type="text"
        className="feedback-input"
        placeholder="Base Price"
        value={basePrice}
        onChange={(e) => setBasePrice(e.target.value)}
      />
      <input
        name="shipping"
        type="text"
        className="feedback-input"
        placeholder="Expected Shipping"
        value={estimated_ship}
        onChange={(e) => setEstimated_ship(e.target.value)}
      />
      <input
        name="sale_type"
        type="text"
        className="feedback-input"
        placeholder="Units for sale"
        value={sale_type}
        onChange={(e) => setSale_type(e.target.value)}
      />
      <input
        name="vendors"
        type="text"
        className="feedback-input"
        placeholder="Vendor Links"
        value={vendor_links}
        onChange={(e) => setVendor_links(e.target.value)}
      />
      <input
        name="discussion_links"
        type="text"
        className="feedback-input"
        placeholder="Discussion Links"
        value={discussion_links}
        onChange={(e) => setDiscussion_links(e.target.value)}
      />
      <textarea
        name="text"
        className="feedback-input"
        placeholder="Description of Product"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="file"
        className="feedback-input"
        id="myFile"
        name="filename"
        value={img_url}
        onChange={(e) => setimg_url(e.target.value)}
      />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
