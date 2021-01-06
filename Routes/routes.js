const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio.js");
const path = require("path");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "manjot",
  api_key: "965418484856643",
  api_secret: "wxW6gdu28L10HpBvBeHp661eMLs",
});

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
router.post("/:id/resume", upload.single("resume"), async (req, res) => {
  let resume = "";
  await cloudinary.uploader.upload(req.file.path, (err, result) => {
    console.log("Error : ", err);
    console.log("Result : ", result);
    resume = result;
  });
  Portfolio.updateOne(
    { key: req.params.id },
    {
      $set: {
        resume: resume.url,
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
router.patch(
  "/projectPictures/:name",
  upload.single("picture"),
  async (req, res) => {
    let projectPictureDetails = "";
    await cloudinary.uploader.upload(req.file.path, (err, result) => {
      console.log("Error : ", err);
      console.log("Result : ", result);
      projectPictureDetails = result;
    });
    let name = "projectPicture_" + req.params.name;
    await Portfolio.findOneAndUpdate(
      { key: "19012001" },
      {
        $pull: {
          projectPictures: name,
        },
      }
    );
    await Portfolio.updateOne(
      { key: "19012001" },
      {
        $addToSet: {
          projectPictures: projectPictureDetails,
        },
      }
    );
    res.send("Picture uploaded successfully");
  }
);
router.patch("/deleteProjectPictures/:name", async (req, res) => {
  let name = "projectPicture_" + req.params.name;
  await Portfolio.findOneAndUpdate(
    { key: "19012001" },
    {
      $pull: {
        "projectPictures.original_filename": name,
      },
    }
  );
});
router.get("/project/pictures", (req, res) => {
  console.log("Hello getting input. ");
  Portfolio.findOne({ key: "19012001" }, (err, foundUser) => {
    console.log(foundUser);
    res.status(200).send(foundUser);
  });
});

router.get("/:id", (req, res, next) => {
  Portfolio.findOne({ key: req.params.id }, (err, foundUser) => {
    res.send({
      foundUser,
    });
  });
});
router.post(
  "/:id/:routes",
  upload.single("profilePicture"),
  async (req, res) => {
    switch (req.params.routes) {
      case "basicDetails": {
        let profilePictureDetails = "";
        await cloudinary.uploader.upload(req.file.path, (err, result) => {
          console.log("Error : ", err);
          console.log("Result : ", result);
          profilePictureDetails = result;
        });
        Portfolio.find({ key: req.params.id }, async (err, foundUser) => {
          if (foundUser.length === 0) {
            const newPortfolio = new Portfolio({
              key: req.params.id,
              name: req.body.name,
              profilePicture: profilePictureDetails.url,
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
  }
);
router.patch(
  "/:id/:route",
  upload.single("profilePicture"),
  async (req, res) => {
    console.log("in patch req : ", req);
    switch (req.params.route) {
      case "basicDetails": {
        let profilePictureDetails = "";
        await cloudinary.uploader.upload(req.file.path, (err, result) => {
          console.log("Error : ", err);
          console.log("Result : ", result);
          profilePictureDetails = result;
        });
        console.log("profilePictureDetails : ", profilePictureDetails);
        console.log("profilePictureDetails.url : ", profilePictureDetails.url);
        Portfolio.updateOne(
          { key: req.params.id },
          {
            $set: {
              name: req.body.name,
              address: req.body.address,
              profilePicture: profilePictureDetails.url,
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
  }
);
module.exports = router;
