import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";

import { toast } from "react-toastify";

const setStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    backgroundColor: "lightgreen",
  },
  child: {
    width: "60%",
    backgroundColor: "lightgreen",
  },
  btn: {
    backgroundColor: "lightgreen",
    color: "green",
  },
}));

const Register = (props) => {
  const classes = setStyles();
  const [name, setName] = React.useState("abc");
  const [email, setEmail] = React.useState("abc@abc.com");
  const [password, setPassword] = React.useState("abc");
  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <Button
          variant="contained"
          className={classes.btn}
          onClick={(e) => {
            userService
              .register(name, email, password)
              .then((data) => {
                console.log(data);
                props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
