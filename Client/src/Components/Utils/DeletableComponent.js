import React from "react";

import "./DeletableComponent.css";
import { Button } from "@material-ui/core";

const DeletableComponent = (props) => {
  return (
    <div className="DeletableComponent">
      <div className="DeletableComponent_name">
        <input value={props.name} />
      </div>
      <Button
        className="DeletableComponent_cancel"
        onClick={() => props.deleteElement(props.name, "skillName")}
      >
        x
      </Button>
    </div>
  );
};
export default DeletableComponent;
