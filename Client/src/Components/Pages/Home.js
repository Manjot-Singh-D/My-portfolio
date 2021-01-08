import React from "react";
import "./Home.css";
import Typing from "react-typing-animation";

const AnimatedTypingComponent_Title = (name) => (
  <Typing speed={15}>
    <p className="title">{name}</p>
  </Typing>
);
const AnimatedTypingComponent_Content = (skills) => (
  <Typing speed={1} hideCursor={true}>
    <p className="content">
      {skills.map((skill) => {
        return (
          <div>
            {skill}
            <br />
          </div>
        );
      })}
    </p>
  </Typing>
);
const Home = (props) => {
  return (
    <div className="homePage">
      <div className="leftContent">
        {AnimatedTypingComponent_Title(props.data.name)}
        {AnimatedTypingComponent_Content(props.data.skills)}
      </div>
    </div>
  );
};
export default Home;
