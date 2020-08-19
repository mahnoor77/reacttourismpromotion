import React from "react";
import k1 from "./../Images/KPK/kalam.jpeg";

import k2 from "./../Images/KPK/Lake-Mahodand-e1446192446504.jpg";

import k3 from "./../Images/KPK/kUMRAT-7.jpeg";

import k4 from "./../Images/KPK/KUMRAT16.jpeg";

import k5 from "./../Images/Gilgit-baltistan/katora-lake-3-960x500.jpg";

import k6 from "./../Images/KPK/naran.jpg";

import k7 from "./../Images/KPK/babusar.jpg";

import k8 from "./../Images/KPK/saiful-muluk1.jpg";

import k9 from "./../Images/KPK/lulusar.jpg";

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

const KPK = () => {
  const classes = useStyles();
  return (
    <body>
      <h3 className={classes.head}>KPK</h3>
      <p className={classes.text}>
        KPK has Sawat which is called mini SwitzerLand no less than SwitzerLand
        and much more.
        <br />
      </p>
      <h3 className={classes.text}>Places to visist in KPK</h3>
      <h3 className={classes.text}>K2-Second highest peak in the world</h3>

      <img src={k2} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Kalam Valley</h3>
      <img src={k3} className={classes.img} />
      <p>Details here</p>
      <h3 className={classes.text}>Mahudand lake</h3>
      <img src={k4} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Kumrat Valley</h3>
      <img src={k5} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Road to Kumrat</h3>
      <img src={k6} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Katora Lake</h3>
      <img src={k7} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Naran</h3>
      <img src={k8} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Babusar top</h3>
      <img src={k9} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Lake Saigul muluk</h3>
    </body>
  );
};
export default KPK;
