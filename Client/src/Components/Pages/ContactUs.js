import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "./ContactUs.css";
import ContactImage from "../../images/contactImage.webp";

const ContactUs = (props) => {
  return (
    <div className="contactPage">
      <div className="title">Reach Me...</div>
      <div className="content">
        <div className="left">
          <img src={ContactImage} alt="contactImage" />
        </div>
        <div className="right">
          <div className="title">
            <div className="titleIcon">
              <LocationOnIcon />
            </div>
            <div className="titleName">Mailing Address</div>
          </div>
          <div className="content">{props.data.address}</div>
          <div className="title">
            <div className="titleIcon">
              <PhoneIcon />
            </div>
            <div className="titleName">Phone Number</div>
          </div>
          <div className="content">{props.data.phoneNumber}</div>
          <div className="title">
            <div className="titleIcon">
              <MailOutlineIcon />
            </div>
            <div className="titleName">Email Address</div>
          </div>
          <div className="content">{props.data.email}</div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
