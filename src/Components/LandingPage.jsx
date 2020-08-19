import React from "react";
import "./../LandingPage.css";
import "./../index.css";
import LandingPageExpansion from "./LandingPageExpansion";
import Abc from "./Abc";

import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    expansion: {
      paddingTop: "495px",
      top: theme.spacing(7),
    },
  })
);
const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <body class="maindiv">
        <div class="menubar">Welcome to Pakistan</div>

        <div className={classes.expansion}>
          <LandingPageExpansion />
        </div>
      </body>
    </div>
  );
};

export default LandingPage;
