import React from "react";

import "./ProjectsModel.css";
import ProjectsDialogOpen from "../Utils/ProjectsDialogOpen";
import { Link } from "@material-ui/core";

const ProjectsModel = (props) => {
  return (
    <div className="projectsModel hvr-bounce-in">
      <div className="number">
        {props.index < 10 ? "0" + props.index : props.index}
      </div>
      <div className="content">
        <div className="title">
          <div className="name">{props.data.name}</div>
          <ProjectsDialogOpen data={props.data} pictures={props.pictures} />
        </div>
        <div className="description">{props.data.shortDescription}</div>
        <div className="link">
          <Link variant="body2" href={props.data.websiteLink} target="_blank">
            {props.data.websiteLink}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectsModel;
