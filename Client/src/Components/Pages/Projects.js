import React from "react";

import ProjectsModel from "../Utils/ProjectsModel";
import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projectsPage">
      <div className="title">My Projects</div>
      <div className="projectsList">
        <div className="left">
          {props.data.projectsDetails.map((project, index) => {
            if (index < props.data.projectsDetails.length / 2)
              return (
                <ProjectsModel
                  index={index + 1}
                  pictures={props.data.projectPictures}
                  data={project}
                />
              );
            return null;
          })}
        </div>
        <div className="right">
          {props.data.projectsDetails.map((project, index) => {
            if (index >= props.data.projectsDetails.length / 2)
              return (
                <ProjectsModel
                  index={index + 1}
                  pictures={props.data.projectPictures}
                  data={project}
                />
              );
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
