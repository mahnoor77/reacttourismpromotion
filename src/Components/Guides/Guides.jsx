import React, { useEffect } from "react";
import SingleGuide from "./SingleGuide";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import guideService from "./../../services/GuideService";
import userService from "../../services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles((theme) => ({
  addbtn: {
    position: "fixed",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
  grid1: {
    paddingLeft: "27px",
  },
}));
const Guides = (props) => {
  const [guids, setGuides] = React.useState([{ name: "abc" }, { name: "bbc" }]);
  const classes = useStyles();
  const getData = () => {
    guideService
      .getGuides()
      .then((data) => {
        setGuides(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);
  console.log("nnn");
  const handleNewGuideClick = () => {
    props.history.push("/guides/new");
  };
  return (
    <div>
      {}
      <Fab
        color="primary"
        aerial-label="add"
        className={classes.addbtn}
        onClick={handleNewGuideClick}
      >
        <AddIcon />
      </Fab>

      {guids.length == 0 ? (
        <p>
          <br />
          <br />
          <br />
          There are no Guides available
        </p>
      ) : (
        <Grid item xs={12}>
          <h1>
            <br /> <br />
            Travel Guides' Profile
          </h1>
          <br />
          {guids.map((guide, index) => (
            <SingleGuide key={index} guide={guide} onDelete={getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Guides;
