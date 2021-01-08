import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const [notVisible, setNotVisible] = useState([]);
  const setBrokenImage = (index) => {
    setNotVisible([...notVisible, index]);
  };
  const shouldVisible = (index) => {
    for (let i = 0; i < notVisible.length; i++) {
      if (notVisible[i] === index) {
        return false;
      }
    }
    return true;
  };
  const classes = useStyles();
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
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img
          src={url}
          width="100%"
          height="auto"
          alt={props.data.name + ".png"}
          style={{
            display: `${shouldVisible(1) ? "block" : "none"}`,
            marginLeft: "auto",
            marginRight: "auto",
            objectFit: "cover",
          }}
          onError={() => {
            setBrokenImage(1);
          }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.mainDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.data.githubLink}
          target="_blank"
        >
          Github Repo
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.data.websiteLink}
          target="_blank"
        >
          Visit Website
        </Button>
      </CardActions>
    </Card>
  );
}
