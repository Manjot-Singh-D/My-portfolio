const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio.js");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname === "resume"
        ? "resume-19012001" + path.extname(file.originalname)
        : file.fieldname === "profilePicture"
        ? "profilePicture" + path.extname(file.originalname)
        : file.fieldname === "picture"
        ? "projectPicture_" + req.params.name + path.extname(file.originalname)
        : file.originalname
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
router.post("/:id/resume", upload.single("resume"), (req, res) => {
  Portfolio.updateOne(
    { key: req.params.id },
    {
      $set: {
        resume: req.file.path,
      },
    },
    (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send("Heyy, you just uploaded a new pdf!!");
      }
    }
  );
});
router.post(
  "/projectPictures/:name",
  upload.single("picture"),
  (req, res) => {}
);
router.get("/:id", (req, res, next) => {
  Portfolio.findOne({ key: req.params.id }, (err, foundUser) => {
    res.status(200).send({
      foundUser,
    });
  });
});
router.post("/:id/:routes", upload.single("profilePicture"), (req, res) => {
  switch (req.params.routes) {
    case "basicDetails": {
      Portfolio.find({ key: req.params.id }, async (err, foundUser) => {
        if (foundUser.length === 0) {
          const newPortfolio = new Portfolio({
            key: req.params.id,
            name: req.body.name,
            profilePicture: req.file.path,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            university: req.body.university,
            branch: req.body.branch,
            resume: "",
            aboutMyIntro: req.body.aboutMyIntro,
            skillsIntro: req.body.skillsIntro,
            skills: [],
            skillsDetails: [],
            projectsDetails: [],
          });
          newPortfolio.save();
          res.status(200).send({ valid: true });
        } else {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(300).send("User already exists");
          }
        }
      });
      break;
    }
    default: {
      res.status(200).send("Please Update Basic Details First");
    }
  }
});
router.patch("/:id/:route", upload.single("profilePicture"), (req, res) => {
  switch (req.params.route) {
    case "basicDetails": {
      Portfolio.updateOne(
        { key: req.params.id },
        {
          $set: {
            name: req.body.name,
            address: req.body.address,
            profilePicture: req.file.path,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            university: req.body.university,
            branch: req.body.branch,
            aboutMyIntro: req.body.aboutMyIntro,
            skillsIntro: req.body.skillsIntro,
          },
        },
        (err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).send("Basic Details Updated Successfully!!!!");
          }
        }
      );
      break;
    }
    case "skillsName": {
      Portfolio.updateOne(
        { key: req.params.id },
        {
          $set: {
            skills: req.body,
          },
        },
        (err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).send("Skills Updated Successfully!!!!");
          }
        }
      );
      break;
    }
    case "technologyDetails": {
      Portfolio.updateOne(
        { key: req.params.id },
        {
          $set: {
            skillsDetails: req.body,
          },
        },
        (err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).send("Skills Details Updated Successfully!!!!");
          }
        }
      );
      break;
    }
    case "projectDetails": {
      Portfolio.updateOne(
        { key: req.params.id },
        {
          $set: {
            projectsDetails: req.body,
          },
        },
        (err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).send("Skills Details Updated Successfully!!!!");
          }
        }
      );
      break;
    }
  }
});
module.exports = router;
