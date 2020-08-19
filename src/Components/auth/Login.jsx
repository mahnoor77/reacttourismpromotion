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
    backgroundcolor: "lightGreen",
  },
  child: {
    width: "60%",
  },
  btn: {
    backgroundColor: "lightgreen",
    color: "green",
  },
}));

const Login = (props) => {
  const classes = setStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={classes.container}>
      <div className={classes.child}>
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
          color="primary"
          variant="contained"
          className={classes.btn}
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.data.response, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
