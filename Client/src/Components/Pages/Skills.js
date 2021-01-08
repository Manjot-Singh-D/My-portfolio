import React from "react";
import SkillsCard from "../Utils/SkillsCard";

import "./Skills.css";

const Skills = (props) => {
  return (
    <div className="skillsPage">
      <div className="top">
        <p className="title">Skills</p>
      </div>
      <div className="skills_content">
        {props.data.skillsDetails.map((skillsDetail, index) => {
          return <SkillsCard key={index} data={skillsDetail} />;
        })}
      </div>
    </div>
  );
};
export default Skills;
