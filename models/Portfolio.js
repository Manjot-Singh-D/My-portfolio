const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  key: { default: "19012001", type: String },
  profilePicture: String,
  name: String,
  skills: Array,
  address: String,
  email: String,
  phoneNumber: String,
  university: String,
  branch: String,
  aboutMyIntro: String,
  skillsIntro: String,
  resume: String,
  skillsDetails: [
    { Title: String, details: [{ name: String, percent: Number }] },
  ],
  projectsDetails: [
    {
      name: String,
      shortDescription: String,
      mainDescription: String,
      websiteLink: String,
      githubLink: String,
    },
  ],
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
