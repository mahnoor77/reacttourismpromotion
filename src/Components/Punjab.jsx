import React from "react";
import k1 from "./../Images/Punjab/L2.jpg";

import k2 from "./../Images/Punjab/fort4.jpg";

import k3 from "./../Images/Punjab/MINAR-E-PAKISTAN.jpg";

import k4 from "./../Images/Punjab/Khewra-mines.jpg";

import k5 from "./../Images/Punjab/Harrapa_600x379.jpeg";

import k6 from "./../Images/Punjab/orgsize_28Taxila Heritage.jpg";

import k7 from "./../Images/Punjab/Katas-Raj-Temple.jpg";

import k8 from "./../Images/Punjab/Derawar-fort.jpg";

import k9 from "./../Images/Punjab/Noor Mahal.jpg";

import k10 from "./../Images/Punjab/rohtas fort_0.jpg";

import k11 from "./../Images/Punjab/Chenab.jpg";

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

const Punjab = () => {
  const classes = useStyles();
  return (
    <body>
      <h3 className={classes.head}>Punjab</h3>
      <p className={classes.text}>
        Kashmir is known as heaven on earth. Come and see this trurh. A place
        having the second highest peak in the world.
        <br /> Filled with lush green snow peaked mountains
      </p>
      <h3 className={classes.text}>Places to visist in Punjab</h3>
      <h3 className={classes.text}>Badshahi Mosque</h3>

      <img src={k2} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Lahore Fort</h3>
      <img src={k3} className={classes.img} />
      <p>Details here</p>
      <h3 className={classes.text}>Minar e Pakistan</h3>
      <img src={k4} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Salt Range Khewra mines</h3>
      <img src={k5} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Harrappa</h3>
      <img src={k6} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Old Heritage Texila</h3>
      <img src={k7} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Katas Raj Temple</h3>
      <img src={k8} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Darewar Fort</h3>
      <img src={k9} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Noor Mahal</h3>
      <img src={k10} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Rohtas Fort</h3>
      <img src={k11} className={classes.img} />
      <p className={classes.text}>Details here</p>
    </body>
  );
};
export default Punjab;
