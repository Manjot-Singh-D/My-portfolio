import React from "react";

import "./AddingSkillDetails.css";
import { Button } from "@material-ui/core";

const AddingSkillDetails = (props) => {
  return (
    <div className="AddingSkillsDetails">
      <p className="AddingSkillsDetails_name">{props.skill.name}</p>
      <p className="AddingSkillsDetails_percent">{props.skill.percent}%</p>
      <Button
        className="AddingSkillsDetails_cancel"
        onClick={() => props.deleteElement(props.index)}
      >
        x
      </Button>
    </div>
  );
};
export default AddingSkillDetails;
