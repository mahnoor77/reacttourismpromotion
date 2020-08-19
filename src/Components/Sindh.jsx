import React from "react";
import k1 from "./../Images/Sindha/22-Sunset at Seaview, karachi-Sindh, Pakistan.jpg";

import k2 from "./../Images/Sindha/220px-Shah_jahan_mosque_-Thatta_6(asad_aman).jpg";

import k3 from "./../Images/Sindha/Hyderabad-museum1-1024x431.jpg";

import k4 from "./../Images/Sindha/talpurs-tmb-1024x788.jpg";

import k5 from "./../Images/Sindha/Tomb_of_Nawab_Isa_Khan_Tarkhan_Makli_Thatta.jpg";

import k6 from "./../Images/Sindha/s7.jpg";

import k7 from "./../Images/Sindha/pakka-1024x431.jpg";

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

const Sindh = () => {
  const classes = useStyles();
  return (
    <body>
      <h3 className={classes.head}>Sindh</h3>
      <p className={classes.text}></p>
      <h3 className={classes.text}>Places to visist Sind</h3>
      <h3 className={classes.text}>Karachi</h3>

      <img src={k2} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Shah Jahan Mosque</h3>
      <img src={k3} className={classes.img} />
      <p>Details here</p>
      <h3 className={classes.text}>Hyderabad Museum</h3>
      <img src={k4} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Talpurs tomb</h3>
      <img src={k5} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Tomb of Nawab Isa Khan</h3>
      <img src={k6} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Shabaz Qalanda Mouselum</h3>
      <img src={k7} className={classes.img} />
      <p className={classes.text}>Details here</p>
    </body>
  );
};
export default Sindh;
