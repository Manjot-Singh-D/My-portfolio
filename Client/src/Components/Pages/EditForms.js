import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./EditForms.css";
import DeletableComponent from "../Utils/DeletableComponent";
import AddingSkills from "../Utils/AddingSkills";
import AddingProjects from "../Utils/AddingProjects";
import LoadingAnimations from "../Utils/LoadingAnimations";
import BasicDetails from "../Utils/BasicDetails";
import axios from "axios";

const EditForms = (props) => {
  useEffect(() => {
    document.title = "Edit Details";
  }, []);
  let formData = new FormData();
  const clearFormData = () => {
    var entries = formData.entries();
    for (var pair of entries) {
      formData.delete(pair[0]);
    }
  };
  const [SkillsName, setSkillsName] = useState(props.data.skills || []);
  const [DP, setDP] = useState(props.data.profilePicture);
  const [projectPhoto, setProjectPhoto] = useState("");
  const [SkillsDetails, setSkillsDetails] = useState(
    props.data.skillsDetails || []
  );
  const [ProjectDetails, setProjectDetails] = useState(
    props.data.projectsDetails || []
  );
  const [profilePicture, setProfilePicture] = useState("");
  const [basicDetails, setBasicDetails] = useState({
    name: props.data.name,
    profilePicture: props.data.profilePicture,
    address: props.data.address,
    phoneNumber: props.data.phoneNumber,
    email: props.data.email,
    university: props.data.university,
    branch: props.data.branch,
    aboutMyIntro: props.data.aboutMyIntro,
    skillsIntro: props.data.skillsIntro,
  });
  const [valueInput, setvalueInput] = useState({ name: "", value: "" });
  const [projectsInput, setProjectsInput] = useState({
    name: "",
    shortDescription: "",
    mainDescription: "",
    websiteLink: "",
    githubLink: "",
  });
  const [resume, setResume] = useState({});
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const handleChangeResume = (files) => {
    clearFormData();
    formData.append("resume", files[0]);
    setResume({ formData, config });
  };
  const onSubmitMainBox = (boxName) => {
    switch (boxName) {
      case "basicDetails": {
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_URL}/19012001/basicDetails`,
            profilePicture.formData,
            profilePicture.config
          )
          .then((res) => {
            console.log(res);
          });
        break;
      }
      case "resume": {
        if (resume !== {}) {
          axios
            .post(
              `${process.env.REACT_APP_BACKEND_URL}/19012001/resume`,
              resume.formData,
              resume.config
            )
            .then((res) => {
              console.log(res);
            });
        } else {
          console.log("Please add the resume first");
        }
        break;
      }
      case "skillsNameBox": {
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_URL}/19012001/skillsName`,
            SkillsName
          )
          .then((res) => {
            console.log(res);
          });
        break;
      }
      case "skillsDetailsBox": {
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_URL}/19012001/technologyDetails`,
            SkillsDetails
          )
          .then((res) => {
            console.log(res);
          });
        break;
      }
      case "projectDetailsBox": {
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_URL}/19012001/projectDetails`,
            ProjectDetails
          )
          .then((res) => {
            console.log(res);
          });
        break;
      }
      default:
        console.log("Default Case");
    }
  };
  const handleChangeProfilePicture = (e) => {
    clearFormData();
    formData.append("profilePicture", e.target.files[0]);
    for (var key in basicDetails) {
      formData.append(key, basicDetails[key]);
    }
    setDP(URL.createObjectURL(e.target.files[0]));
    setProfilePicture({ formData, config });
  };
  const handleProjectPicture = (e) => {
    clearFormData();
    formData.append("picture", e.target.files[0]);
    setProjectPhoto({ formData, config });
  };
  const handleSubmit = (e, objName) => {
    e.preventDefault();
    switch (objName) {
      case "skillName": {
        if (valueInput.name === "skillName" && valueInput.value !== "")
          setSkillsName([...new Set([...SkillsName, valueInput.value])]);
        setvalueInput({ name: "", value: "" });
        break;
      }
      case "skillDetails": {
        if (valueInput.name === "skillDetails" && valueInput.value !== "")
          setSkillsDetails([
            ...new Set([
              ...SkillsDetails,
              { Title: valueInput.value, details: [] },
            ]),
          ]);
        setvalueInput({ name: "", value: "" });
        break;
      }
      case "projectDetails": {
        setProjectDetails([...new Set([...ProjectDetails, projectsInput])]);
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_URL}/projectPictures/${projectsInput.name}`,
            projectPhoto.formData,
            projectPhoto.config
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        setProjectsInput({
          name: "",
          shortDescription: "",
          mainDescription: "",
          websiteLink: "",
          githubLink: "",
        });
        break;
      }
      default:
        console.log("Default Case");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setvalueInput({ name, value });
  };
  const handleProjectInputs = (event) => {
    const { name, value } = event.target;
    setProjectsInput((prevprojectsInput) => {
      return {
        ...prevprojectsInput,
        [name]: value,
      };
    });
  };
  const handleBasicDetailsInput = (event) => {
    const { name, value } = event.target;
    setBasicDetails((prevbasicDetails) => {
      return {
        ...prevbasicDetails,
        [name]: value,
      };
    });
  };
  const deleteElement = (name, objName, index) => {
    switch (objName) {
      case "skillName": {
        setSkillsName(
          SkillsName.filter((skill) => {
            return skill !== name;
          })
        );
        setvalueInput({ name: "", value: "" });
        break;
      }
      case "skillDetails": {
        setSkillsDetails(
          SkillsDetails.filter((skill, i) => {
            return i !== index;
          })
        );
        setvalueInput({ name: "", value: "" });
        break;
      }
      case "projectDetails": {
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_URL}/deleteProjectPictures/${ProjectDetails[index].name}`,
            projectPhoto.formData,
            projectPhoto.config
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        setProjectDetails(
          ProjectDetails.filter((project, i) => {
            return index !== i;
          })
        );
        setProjectsInput({
          name: "",
          shortDescription: "",
          mainDescription: "",
          websiteLink: "",
          githubLink: "",
        });
        break;
      }
      default:
        console.log("Default Case");
    }
  };
  const handleAddingSkills = (index, skills) => {
    setSkillsDetails([
      ...SkillsDetails,
      (SkillsDetails[index].details = skills),
    ]);
    setSkillsDetails(
      SkillsDetails.filter((skill) => {
        return skill.details.length !== 0;
      })
    );
  };
  if (props.data === null) {
    return <LoadingAnimations />;
  } else {
    return (
      <div className="editForms">
        <div className="basicDetails">
          <p className="headings">Basic Details</p>
          <form
            action="/"
            onSubmit={(e) => {
              onSubmitMainBox(e, "basicDetails");
            }}
          >
            <div className="forms">
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={basicDetails.name}
                  onChange={handleBasicDetailsInput}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="Mailing Address"
                  variant="outlined"
                  name="address"
                  value={basicDetails.address}
                  required
                  onChange={handleBasicDetailsInput}
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  value={basicDetails.phoneNumber}
                  onChange={handleBasicDetailsInput}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  name="email"
                  value={basicDetails.email}
                  onChange={handleBasicDetailsInput}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="University"
                  variant="outlined"
                  name="university"
                  value={basicDetails.university}
                  onChange={handleBasicDetailsInput}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="Branch | Duration"
                  variant="outlined"
                  name="branch"
                  value={basicDetails.branch}
                  onChange={handleBasicDetailsInput}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  required
                  id="outlined-basic"
                  label="AboutPage Intro"
                  variant="outlined"
                  name="aboutMyIntro"
                  value={basicDetails.aboutMyIntro}
                  onChange={handleBasicDetailsInput}
                />
              </div>

              <div className="inputs">
                <input
                  type="file"
                  name="profilePicture"
                  onChange={(e) => handleChangeProfilePicture(e)}
                />
              </div>
            </div>
          </form>
          <div className="forms">
            <BasicDetails data={basicDetails} profilePicture={DP} />
          </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="submitButton"
            onClick={() => onSubmitMainBox("basicDetails")}
          >
            Submit
          </Button>
        </div>
        <div className="basicDetails">
          <p className="headings">Resume</p>
          <div className="forms">
            <div className="inputs">
              <input
                type="file"
                name="resume"
                onChange={(e) => handleChangeResume(e.target.files)}
              />
            </div>
          </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="submitButton"
            onClick={() => onSubmitMainBox("resume")}
          >
            Submit
          </Button>
        </div>
        <div className="skillsNameBox">
          <p className="headings">Skills Name</p>
          <div className="inputs">
            <form onSubmit={(e) => handleSubmit(e, "skillName")}>
              <TextField
                id="outlined-basic"
                label="Skill Name"
                variant="outlined"
                onChange={handleInputChange}
                value={valueInput.name === "skillName" ? valueInput.value : ""}
                name="skillName"
              />
            </form>
          </div>
          <div className="forms">
            {SkillsName.map((skill, index) => {
              return (
                <DeletableComponent
                  name={skill}
                  key={index}
                  deleteElement={deleteElement}
                />
              );
            })}
          </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="submitButton"
            onClick={() => {
              onSubmitMainBox("skillsNameBox");
            }}
          >
            Submit
          </Button>
        </div>
        <div className="skillsDetailsBox">
          <p className="headings">Technology Details</p>
          <div className="inputs">
            <form onSubmit={(e) => handleSubmit(e, "skillDetails")}>
              <TextField
                id="outlined-basic"
                label="Technology Name"
                variant="outlined"
                name="skillDetails"
                onChange={handleInputChange}
                value={
                  valueInput.name === "skillDetails" ? valueInput.value : ""
                }
              />
            </form>
          </div>
          <div className="forms">
            {SkillsDetails.map((skillDetail, index) => {
              return (
                <AddingSkills
                  data={skillDetail}
                  index={index}
                  key={index}
                  handleAddingSkills={handleAddingSkills}
                  setSkillsDetails={setSkillsDetails}
                  SkillsDetails={SkillsDetails}
                  deleteElement={deleteElement}
                />
              );
            })}
          </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="submitButton"
            onClick={() => {
              onSubmitMainBox("skillsDetailsBox");
            }}
          >
            Submit
          </Button>
        </div>
        <div className="projectDetailsBox">
          <p className="headings">Projects Details</p>
          <div className="inputs">
            <form onSubmit={(e) => handleSubmit(e, "projectDetails")}>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  name="name"
                  onChange={handleProjectInputs}
                  value={projectsInput.name}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="short description"
                  variant="outlined"
                  name="shortDescription"
                  onChange={handleProjectInputs}
                  value={projectsInput.shortDescription}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="main description"
                  variant="outlined"
                  name="mainDescription"
                  onChange={handleProjectInputs}
                  value={projectsInput.mainDescription}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="website link"
                  variant="outlined"
                  name="websiteLink"
                  onChange={handleProjectInputs}
                  value={projectsInput.websiteLink}
                  required
                />
              </div>
              <div className="inputs">
                <TextField
                  id="outlined-basic"
                  label="github link"
                  variant="outlined"
                  name="githubLink"
                  onChange={handleProjectInputs}
                  value={projectsInput.githubLink}
                  required
                />
              </div>
              <div className="inputs">
                <input
                  type="file"
                  name="picture"
                  onChange={(e) => handleProjectPicture(e)}
                  required
                />
              </div>
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </form>
          </div>
          <div className="forms">
            {ProjectDetails.map((projectDetail, index) => {
              return (
                <AddingProjects
                  data={projectDetail}
                  index={index}
                  key={index}
                  pictures={props.data.projectPictures}
                  deleteElement={deleteElement}
                />
              );
            })}
          </div>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="submitButton"
            onClick={() => {
              onSubmitMainBox("projectDetailsBox");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
};
export default EditForms;
