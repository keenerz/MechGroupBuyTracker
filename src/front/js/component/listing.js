import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/listing.css";
import { setModalShow } from "../component/popup";

export const Listing = () => {
  const { store, actions } = useContext(Context);
  const [project, setProject] = useState({});
  const history = useHistory();

  return (
    <form
      method="post"
      onSubmit={(e) => {
        if (
          project.name == "" ||
          project.project_type == "" ||
          project.project_stage == ""
        ) {
          alert(
            "Cannot Submit without a name, Project Stage and/or Project Type"
          );
          e.preventDefault();
        } else {
          actions
            .addProject(project)
            .then(e.preventDefault())
            .then(window.location.reload());
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
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
      />
      <label for="project_type" className="form-label">
        Project Type
      </label>
      <select
        className="feedback-input-selector"
        aria-label="project_type"
        value={project.project_type}
        onChange={(e) => {
          setProject({ ...project, project_type: e.target.value });
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
        value={project.project_stage}
        onChange={(e) => {
          setProject({ ...project, project_stage: e.target.value });
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
        value={project.region}
        onChange={(e) => setProject({ ...project, region: e.target.value })}
      />
      <label for="basePrice" className="form-label">
        Base Price
      </label>
      <input
        name="basePrice"
        type="number"
        className="feedback-input"
        placeholder="Base Price"
        value={project.basePrice}
        onChange={(e) => setProject({ ...project, baseprice: e.target.value })}
      />
      <label for="shipping" className="form-label">
        Estimated Shipping
      </label>
      <input
        name="shipping"
        type="text"
        className="feedback-input"
        placeholder="Expected Shipping"
        value={project.estimated_ship}
        onChange={(e) =>
          setProject({ ...project, estimated_ship: e.target.value })
        }
      />
      <label for="started_at" className="form-label">
        Group Buy Starting Date
      </label>
      <input
        name="started_at"
        type="date"
        className="feedback-input"
        placeholder="Starting Date"
        value={project.started_at}
        onChange={(e) => setProject({ ...project, started_at: e.target.value })}
      />
      <label for="ended_at" className="form-label">
        Group Buy Ending Date
      </label>
      <input
        name="ended_at"
        type="date"
        className="feedback-input"
        placeholder="Ending Date"
        value={project.ended_at}
        onChange={(e) => setProject({ ...project, ended_at: e.target.value })}
      />
      <label for="sale_type" className="form-label">
        Sale Type
      </label>
      <input
        name="sale_type"
        type="text"
        className="feedback-input"
        placeholder="Units for sale"
        value={project.sale_type}
        onChange={(e) => setProject({ ...project, sale_type: e.target.value })}
      />
      <label for="vendors" className="form-label">
        Vendors
      </label>
      <input
        name="vendors"
        type="text"
        className="feedback-input"
        placeholder="Vendor Links"
        value={project.vendor_links}
        onChange={(e) =>
          setProject({ ...project, vendor_links: e.target.value })
        }
      />
      <label for="discussion_links" className="form-label">
        Discussion Links
      </label>
      <input
        name="discussion_links"
        type="text"
        className="feedback-input"
        placeholder="Discussion Links"
        value={project.discussion_links}
        onChange={(e) =>
          setProject({ ...project, discussion_links: e.target.value })
        }
      />
      <label for="description" className="form-label">
        Description
      </label>
      <textarea
        name="description"
        className="feedback-input"
        placeholder="Description of Product"
        value={project.description}
        onChange={(e) => {
          setProject({ ...project, description: e.target.value });
        }}
      ></textarea>
      <label for="imgUrl" className="form-label">
        Image URL
      </label>
      <input
        type="url"
        className="feedback-input"
        id="imgUrl"
        name="imgUrl"
        placeholder="Image URL"
        value={project.img_url}
        onChange={(e) => setProject({ ...project, img_url: e.target.value })}
      />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
