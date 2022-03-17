import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/listing.css";
import { setModalShow } from "../component/popup";

export const Listing = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [project_type, setProject_type] = useState("");
  const [project_stage, setProject_stage] = useState("");
  const [sale_type, setSale_type] = useState(null);
  const [region, setRegion] = useState(null);
  const [basePrice, setBasePrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [estimated_ship, setEstimated_ship] = useState(null);
  const [vendor_links, setVendor_links] = useState(null);
  const [img_url, setImg_url] = useState(null);
  const [discussion_links, setDiscussion_links] = useState(null);
  const [started_at, setStarted_at] = useState(null);
  const [ended_at, setEnded_at] = useState(null);
  const history = useHistory();

  return (
    <form
      method="post"
      onSubmit={(e) => {
        if (name == "" || project_type == "" || project_stage == "") {
          alert(
            "Cannot Submit without a name, Project Stage and/or Project Type"
          );
          e.preventDefault();
        } else {
          actions
            .addProject(
              name,
              project_type,
              project_stage,
              region,
              basePrice,
              description,
              estimated_ship,
              started_at,
              ended_at,
              vendor_links,
              discussion_links,
              img_url
            )
            .then(e.preventDefault())
            .then(popup.props.setModalShow(false));
        }
      }}
    >
      <label for="name" className="form-label">
        Project Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className="feedback-input"
        placeholder=" Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="project_type" className="form-label">
        Project Type
      </label>
      <select
        className="feedback-input-selector"
        aria-label="project_type"
        value={project_type}
        onChange={(e) => {
          setProject_type(e.target.value);
        }}
      >
        <option value="">Project Type</option>
        <option value="keycap">Keycap</option>
        <option value="keyboard">Keyboard</option>
        <option value="switches">Switch</option>
      </select>
      <label for="project_stage" className="form-label">
        Project Stage
      </label>
      <select
        className="feedback-input-selector"
        aria-label="project_stage"
        value={project_type}
        onChange={(e) => {
          setProject_stage(e.target.value);
        }}
      >
        <option value="">Project Stage</option>
        <option value="interestcheck">Interest Check</option>
        <option value="groupbuy">Group Buy</option>
        <option value="ended">Ended</option>
      </select>
      <label for="region" className="form-label">
        Region
      </label>
      <input
        name="region"
        type="text"
        className="feedback-input"
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <label for="basePrice" className="form-label">
        Base Price
      </label>
      <input
        name="basePrice"
        type="number"
        className="feedback-input"
        placeholder="Base Price"
        value={basePrice}
        onChange={(e) => setBasePrice(e.target.value)}
      />
      <label for="shipping" className="form-label">
        Estimated Shipping
      </label>
      <input
        name="shipping"
        type="text"
        className="feedback-input"
        placeholder="Expected Shipping"
        value={estimated_ship}
        onChange={(e) => setEstimated_ship(e.target.value)}
      />
      <label for="started_at" className="form-label">
        Group Buy Starting Date
      </label>
      <input
        name="started_at"
        type="date"
        className="feedback-input"
        placeholder="Starting Date"
        value={started_at}
        onChange={(e) => setStarted_at(e.target.value)}
      />
      <label for="ended_at" className="form-label">
        Group Buy Ending Date
      </label>
      <input
        name="ended_at"
        type="date"
        className="feedback-input"
        placeholder="Ending Date"
        value={ended_at}
        onChange={(e) => setEnded_at(e.target.value)}
      />
      <label for="sale_type" className="form-label">
        Sale Type
      </label>
      <input
        name="sale_type"
        type="text"
        className="feedback-input"
        placeholder="Units for sale"
        value={sale_type}
        onChange={(e) => setSale_type(e.target.value)}
      />
      <label for="vendors" className="form-label">
        Vendors
      </label>
      <input
        name="vendors"
        type="text"
        className="feedback-input"
        placeholder="Vendor Links"
        value={vendor_links}
        onChange={(e) => setVendor_links(e.target.value)}
      />
      <label for="discussion_links" className="form-label">
        Discussion Links
      </label>
      <input
        name="discussion_links"
        type="text"
        className="feedback-input"
        placeholder="Discussion Links"
        value={discussion_links}
        onChange={(e) => setDiscussion_links(e.target.value)}
      />
      <label for="description" className="form-label">
        Vendors
      </label>
      <textarea
        name="description"
        className="feedback-input"
        placeholder="Description of Product"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label for="imgUrl" className="form-label">
        Vendors
      </label>
      <input
        type="url"
        className="feedback-input"
        id="imgUrl"
        name="imgUrl"
        placeholder="Image URL"
        value={img_url}
        onChange={(e) => setImg_url(e.target.value)}
      />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
