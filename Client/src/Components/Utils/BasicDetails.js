import React from "react";

import "./BasicDetails.css";

const BasicDetails = (props) => {
  return (
    <div className="BasicDetails">
      <div className="BasicDetails_name">
        <img
          src={props.profilePicture}
          alt="profilePicture"
          width="250px"
          height="auto"
          style={{ marginLeft: "60px", marginRight: "auto" }}
        />
        <p>
          <b>Name : </b>
          {props.data.name}
        </p>
        <p>
          <b>Mailing Address : </b>
          {props.data.address}
        </p>
        <p>
          <b>Phone Number : </b>
          {props.data.phoneNumber}
        </p>
        <p>
          <b>Email Address : </b>
          {props.data.email}
        </p>
        <p>
          <b>University : </b>
          {props.data.university}
        </p>
        <p>
          <b>Branch | Duration : </b>
          {props.data.branch}
        </p>
        <p>
          <b>About page Info : </b>
          {props.data.aboutMyIntro}
        </p>
        <p>
          <b>Skills Intro</b>
          {props.data.skillsIntro}
        </p>
      </div>
    </div>
  );
};
export default BasicDetails;
