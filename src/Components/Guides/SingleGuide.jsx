import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import guideService from "./../../services/GuideService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const setStyles = makeStyles((theme) => ({
  add: {
    paddingLeft: "27px",
    backgroundColor: "lightgreen",
  },
  btn: {
    backgroundColor: "lightgreen",
    color: "green",
  },
}));

const SingleGuide = (props) => {
  const { guide, onDelete, history } = props;
  console.log(props);
  const set = setStyles();

  return (
    <Grid item xs={3} className={set.add}>
      <p>
        <b>Guide's name:</b>
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              className={set.btn}
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/guides/update/" + guide._id);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                guideService
                  .deleteGuide(guide._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
        {!userService.isAdmin() && (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              guideService
                .deleteGuide(guide._id)
                .then((data) => {
                  console.log(data);
                  onDelete();

                  console.log("Guide booked");
                  toast.success("Guide booked! Get ready for the tour!", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
              //history.push("/guides/update/" + guide._id);
            }}
          >
            Book Guide
          </Button>
        )}
        <br />
        {guide.name}
        <br />
        <b>Contact number:</b>
        <br />
        {guide.contact}
        <br />
        <b>Residence:</b>
        <br />
        {guide.residence}
        <br />
        <b>CNIC:</b>
        <br />
        {guide.cnic}
        <br />
        <b>Email:</b> <br />
        {guide.email}
        <br />
      </p>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleGuide);
