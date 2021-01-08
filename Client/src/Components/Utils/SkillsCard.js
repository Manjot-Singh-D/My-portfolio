import React from "react";
import "./SkillsCard.css";
import SkillsPercent from "../Utils/SkillsPercent";

const SkillsCard = (props) => {
  return (
    <div className="SkillsCard animate__animated  animate__rotateInDownLeft hvr-bounce-to-bottom ">
      <div className="content">
        <div className="title">{props.data.Title}</div>
        {props.data.details.map((skills, index) => {
          return (
            <div className="skills" key={index}>
              <div className="skillsName">{skills.name}</div>
              <div className="skillsPercent">
                <SkillsPercent val={skills.percent} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SkillsCard;
