import React, { useEffect, useState } from "react";

import "./AddingProjects.css";
import { Button } from "@material-ui/core";
import LoadingAnimations from "./LoadingAnimations";

const AddingProjects = (props) => {
  const [notVisible, setNotVisible] = useState([]);
  const setBrokenImage = (index) => {
    setNotVisible([...notVisible, index]);
  };
  const [url, setUrl] = useState("");
  const getImage = (name) => {
    let sameNamePictures = props.pictures.filter((picture) => {
      return picture.original_filename === "projectPicture_" + name
        ? picture.url
        : "";
    });
    if (sameNamePictures.length !== 0) {
      if (sameNamePictures.length === 1) {
        setUrl(sameNamePictures[0].url);
      }
      let dates = [];
      sameNamePictures.map((picture) => {
        dates.push(picture.created_at);
      });
      dates.sort();
      let maxDate = dates[dates.length - 1];
      sameNamePictures.map((picture) => {
        if (maxDate === picture.created_at) {
          setUrl(picture.url);
        }
      });
      return "";
    }
  };
  useEffect(() => {
    getImage(props.data.name);
  }, []);
  const shouldVisible = (index) => {
    for (let i = 0; i < notVisible.length; i++) {
      if (notVisible[i] === index) {
        return false;
      }
    }
    return true;
  };
  if (props.data || 1) {
    return (
      <div className="AddingProjects">
        <img
          // src={`${process.env.REACT_APP_ASSET_URL}/media/projectPicture_${props.data.name}.png`}
          src={url}
          width="300px"
          height="auto"
          alt={props.data.name + ".png"}
          style={{ display: `${shouldVisible(1) ? "block" : "none"}` }}
          onError={() => {
            setBrokenImage(1);
          }}
        />
        {/* <img
          src={`${process.env.REACT_APP_ASSET_URL}/media/projectPicture_${props.data.name}.jpg`}
          width="300px"
          height="auto"
          alt={props.data.name + ".jpg"}
          style={{ display: `${shouldVisible(2) ? "block" : "none"}` }}
          onError={() => {
            setBrokenImage(2);
          }}
        />
        <img
          src={`${process.env.REACT_APP_ASSET_URL}/media/projectPicture_${props.data.name}.jpeg`}
          width="300px"
          height="auto"
          alt={props.data.name + ".jpeg"}
          style={{ display: `${shouldVisible(3) ? "block" : "none"}` }}
          onError={() => {
            setBrokenImage(3);
          }}
        /> */}
        <br />
        <div className="AddingProjects_name">
          <p>
            <b>Project Name : </b>
            {props.data.name}
          </p>
          <p>
            <b>Short Description : </b>
            {props.data.shortDescription}
          </p>
          <p>
            <b>Main Description : </b>
            {props.data.mainDescription}
          </p>
          <p>
            <b>Website Link : </b>
            {props.data.websiteLink}
          </p>
          <p>
            <b>Github Link : </b>
            {props.data.githubLink}
          </p>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className="AddingProjects_cancel"
          onClick={() =>
            props.deleteElement(props.data, "projectDetails", props.index)
          }
        >
          Delete
        </Button>
      </div>
    );
  } else {
    return <LoadingAnimations />;
  }
};
export default AddingProjects;
