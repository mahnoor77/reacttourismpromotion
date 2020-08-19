import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import guideService from "./../../services/GuideService";
import Auth from "../auth/Auth";
import Admin from "../auth/Admin";
const NewGuide = (props) => {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState(0);
  const [cnic, setCnic] = React.useState("");
  const [residence, setResidence] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add new Guides' Details</h1>
          <TextField
            label="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="contact"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <TextField
            label="cnic"
            value={cnic}
            onChange={(e) => {
              setCnic(e.target.value);
            }}
          />
          <TextField
            label="residence"
            value={residence}
            onChange={(e) => {
              setResidence(e.target.value);
            }}
          />
          <TextField
            label="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={(e) => {
              guideService
                .addGuide({
                  name,
                  contact,
                  cnic,
                  residence,
                  email,
                })
                .then((data) => {
                  console.log(data);
                  props.history.push("/guides");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add new
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default NewGuide;
