import React, { useState } from "react";

import "./AddingSkills.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddingSkillDetails from "./AddingSkillDetails";

const AddingSkills = (props) => {
  const [SkillsDetails, setSkillsDetails] = useState(props.data.details || []);
  const [valueInput, setvalueInput] = useState({ name: "", percent: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkillsDetails([...new Set([...SkillsDetails, valueInput])]);
    setvalueInput({ name: "", percent: "" });
  };
  const handleSkillsSubmit = () => {
    props.handleAddingSkills(props.index, SkillsDetails);
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setvalueInput((prevvalueInput) => {
      return {
        ...prevvalueInput,
        [name]: value,
      };
    });
  }
  const deleteElement = (index) => {
    setSkillsDetails(
      SkillsDetails.filter((skill, i) => {
        return i !== index;
      })
    );
    setvalueInput({ name: "", percent: "" });
  };
  if (SkillsDetails !== null) {
    return (
      <div className="AddingSkills">
        <div className="AddingSkills_content">
          <p className="AddingSkills_name">{props.data.Title}</p>
          <div className="inputs">
            <form action="/" onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Skill Name"
                variant="outlined"
                name="name"
                onChange={handleInputChange}
                value={valueInput.name}
                required
              />
              <TextField
                id="outlined-basic"
                label="Percent"
                variant="outlined"
                name="percent"
                onChange={handleInputChange}
                value={valueInput.percent}
                required
              />
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="forms">
            {SkillsDetails.map((skill, index) => {
              return (
                <AddingSkillDetails
                  skill={skill}
                  key={index}
                  index={index}
                  setSkillsDetails={setSkillsDetails}
                  deleteElement={deleteElement}
                />
              );
            })}
          </div>
          <Button variant="contained" onClick={handleSkillsSubmit}>
            Submit
          </Button>
        </div>

        <Button
          className="AddingSkills_cancel"
          onClick={() =>
            props.deleteElement(
              SkillsDetails.Title,
              "skillDetails",
              props.index
            )
          }
        >
          x
        </Button>
      </div>
    );
  }
};
export default AddingSkills;
