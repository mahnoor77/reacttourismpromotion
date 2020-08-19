import React from "react";
import k1 from "./../Images/Balochistan/G2.png";

import k2 from "./../Images/Balochistan/Pasni.jpg";

import k3 from "./../Images/Balochistan/Q3.jpg";

import k4 from "./../Images/Balochistan/Astola Island.jpg";

import k5 from "./../Images/Balochistan/Sonmiani beach 3.jpg";

import k6 from "./../Images/Balochistan/Ormara.jpg";

import k7 from "./../Images/Balochistan/Chatok.jpg";

import k8 from "./../Images/Balochistan/Pir-ghayb1.jpg";

import k9 from "./../Images/Balochistan/Hingol-bal.jpg";

import k10 from "./../Images/Balochistan/Mohatta-Palace-Museum-2.jpg";

import k11 from "./../Images/Balochistan/B6.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "500px",
    width: "1200px",
    paddingLeft: "100px",
  },
  text: {
    paddingLeft: "100px",
  },
  head: {
    paddingLeft: "100px",

    paddingTop: "75px",
  },
}));

const Balochistan = () => {
  const classes = useStyles();
  return (
    <body>
      <h3 className={classes.head}>Balochistan</h3>
      <p className={classes.text}>Balochistan a land of Beaches</p>
      <h3 className={classes.text}>Places to visist in Balochistan</h3>
      <h3 className={classes.text}>Gawadar-World's Largest deep sea port</h3>

      <img src={k2} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Pasni Beach</h3>
      <img src={k3} className={classes.img} />
      <p>Details here</p>
      <h3 className={classes.text}>Quetta-Diamond of Balochistan</h3>
      <img src={k4} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Astola Island</h3>
      <img src={k5} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Sonmiani Beach</h3>
      <img src={k6} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Ormara Beach</h3>
      <img src={k7} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Chatok Waterfall</h3>
      <img src={k8} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Pir Ghayb warefalls</h3>
      <img src={k9} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Hongol</h3>
      <img src={k10} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Mohatta Palace</h3>
      <img src={k11} className={classes.img} />
      <p className={classes.text}>Details here</p>
    </body>
  );
};
export default Balochistan;
