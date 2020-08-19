import React from "react";
import k1 from "./../Images/Kashmir/BgxWBRxjvNhppUjpaAaBDXJRZLu3AdaGMqihzn3obSS3JKmVLPXhmyU5J1WthjCs5bKUSFAywshfdFPxFxNnajrVF27GcyBmSfwEPyEh8RrFkjJtcNhciTnbgEB8616i7CYKd2tcvovPcRT1cP9dGVxbDiSsW6e3jBjh2WTAYiA.jpg";

import k2 from "./../Images/Kashmir/K2-Gadangoro-paas-trek.jpg";
import k3 from "./../Images/Kashmir/Kashmir-NeelamValley.jpg";
import k4 from "./../Images/Kashmir/SaralLakeNeelamValleyAzadKashmirPakistan472016.jpg";
import k5 from "./../Images/Kashmir/arangkhel3.jpg";
import k6 from "./../Images/Kashmir/ratti-gali-kashmir.jpg";
import k7 from "./../Images/Kashmir/taubut-ajk.jpg";
import k8 from "./../Images/Kashmir/Banjosa-Lake-Rawalakot-AJK-PakisTan.jpg";
import k9 from "./../Images/Kashmir/Shounter-Lake-Pakistan-750x562.jpg";
import k10 from "./../Images/Kashmir/duwarian-lake.jpg";
import k11 from "./../Images/Kashmir/Katha-Lake-Shounter-750x489.jpg";
import k12 from "./../Images/Kashmir/leepa valley.jpg";
import k13 from "./../Images/Kashmir/MuzaffarabadAzadKashmirPakistan472016.jpg";
import k14 from "./../Images/Kashmir/ramkot fort.jpg";
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

const Kashmir = () => {
  const classes = useStyles();
  return (
    <body>
      <h3 className={classes.head}>Kashmir</h3>
      <p className={classes.text}>
        Kashmir is known as heaven on earth. Come and see this trurh. A place
        having the second highest peak in the world.
        <br /> Filled with lush green snow peaked mountains
      </p>
      <h3 className={classes.text}>Places to visist in Kasmir</h3>
      <h3 className={classes.text}>K2-Second highest peak in the world</h3>

      <img src={k2} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Neelam Valley</h3>
      <img src={k3} className={classes.img} />
      <p>Details here</p>
      <h3 className={classes.text}>Saral lake</h3>
      <img src={k4} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Arangkhel</h3>
      <img src={k5} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Ratti gali lake</h3>
      <img src={k6} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Taobut</h3>
      <img src={k7} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Banjosa lake</h3>
      <img src={k8} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Shounter lake</h3>
      <img src={k9} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Duwarian lake</h3>
      <img src={k10} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Chitta khatta lake</h3>
      <img src={k11} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Leepa Valley</h3>
      <img src={k12} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>MazaffarAbad</h3>
      <img src={k12} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Ramkot fort</h3>
      <img src={k14} className={classes.img} />
      <p className={classes.text}>Details here</p>
    </body>
  );
};
export default Kashmir;
