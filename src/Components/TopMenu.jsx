import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import userService from "../services/UserService";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      color: "green",
      padding: "0.5rem",
      textDecorationLine: "none",
    },
    bar: {
      backgroundColor: "rgba(0,0,0,.7)",
      opacity: 0.75,
      //top: theme.spacing(69),
    },
    home: {
      fontSize: 37,
      color: "green",
    },
    buttons: {
      left: theme.spacing(3),
      paddingLeft: "15px",
      color: "green",
      backgroundColor: "lightgreen",
    },
    guide: {
      color: "green",
      fontWeight: "bold",
    },
    flag: {
      height: "47px",
    },
    heading: {
      color: "green",
      fontWeight: "bold",

      // paddingLeft: "231px",
    },
    about: {
      color: "green",
      fontWeight: "bold",
      paddingLeft: "691px",
    },
  })
);
const TopMenu = () => {
  const ab = useStyles();
  return (
    <div>
      <AppBar className={ab.bar}>
        <Toolbar>
          <Typography>
            <IconButton>
              <img src="/Flag_of_Pakistan.ico" className={ab.flag} />
            </IconButton>
          </Typography>
          <Typography>
            <Link to="/" className={ab.link}>
              <MenuRoundedIcon className={ab.home} />
            </Link>
          </Typography>
          <Typography>
            <Link to="/" className={ab.link}>
              <HomeRoundedIcon className={ab.home} />
            </Link>
          </Typography>
          <Typography>
            <Link to="/guides" className={ab.link}>
              <span className={ab.guide}>Guides Info</span>
            </Link>
          </Typography>

          <Typography>
            <span className={ab.about}> About Us</span>
          </Typography>
          <Typography>
            {!userService.isLoggedIn() ? (
              <>
                <Link to="/login" className={ab.link}>
                  <Button variant="contained" className={ab.buttons}>
                    Login
                  </Button>
                </Link>

                <Link to="/register" className={ab.link}>
                  <Button variant="contained" className={ab.buttons}>
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={ab.buttons}
                onClick={(e) => {
                  userService.logout();
                  window.location.reload();
                }}
              >
                Logout {userService.getLoggedInUser().name}
              </Button>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
