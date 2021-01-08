import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import ContactUs from "./Components/Pages/ContactUs";
import axios from "axios";
import LoadingAnimations from "./Components/Utils/LoadingAnimations";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditForms from "./Components/Pages/EditForms";

function App() {
  const [DataDetails, setDataDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/19012001`)
      .then((res) => {
        setLoading(false);
        setDataDetails(res.data.foundUser);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {}, [loading, DataDetails]);
  if (!loading && DataDetails !== null) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="app">
              <Home data={DataDetails} />
              <About data={DataDetails} />
              <Skills data={DataDetails} />
              <Projects data={DataDetails} />
              <ContactUs data={DataDetails} />
            </div>
          </Route>
          <Route exact path="/manjotEdit/19012001">
            <EditForms data={DataDetails} />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <LoadingAnimations />;
  }
}

export default App;
