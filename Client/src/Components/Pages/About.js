import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

import "./About.css";

const About = (props) => {
  return (
    <div className="aboutPage">
      <div className="leftContent">
        <img
          className="hvr-grow"
          src={props.data.profilePicture}
          alt="MyPhoto"
          width="250px"
          height="300px"
          loading="lazy"
        />
        <p className="content hvr-grow">{props.data.name}</p>
      </div>
      <div className="rightContent">
        <p className="collegeName">{props.data.university}</p>
        <p className="branch">{props.data.branch}</p>
        <div className="skills hvr-grow">
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText
                primary={props.data.skills.map((skill, index) => {
                  return <span key={index}> {skill} |</span>;
                })}
              />
            </ListItem>
            <Divider dark />
          </List>
        </div>
        <p className="content">{props.data.aboutMyIntro}</p>
        <Button
          style={{ marginTop: "30px" }}
          variant="contained"
          endIcon={<InsertDriveFileIcon />}
          className="hvr-shutter-out-horizontal"
          href={props.data.resume}
          target="_blank"
        >
          My Resume
        </Button>
      </div>
    </div>
  );
};
export default About;
