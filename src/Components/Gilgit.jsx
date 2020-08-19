import React from "react";
import k1 from "./../Images/Gilgit-baltistan/Karakoram-Highway-6.jpg";

import k2 from "./../Images/Gilgit-baltistan/JUNCTION-POINT-OF-WORLD’S-THREE-GREATEST-MOUNTAINS-RANGES.jpg";
import k3 from "./../Images/Gilgit-baltistan/N3.jpg";

import k4 from "./../Images/Gilgit-baltistan/N3.jpg";

import k5 from "./../Images/Gilgit-baltistan/China-border.jpg";

import k6 from "./../Images/Gilgit-baltistan/passu-valley-hunza-valley.jpg";

import k7 from "./../Images/Gilgit-baltistan/baltit-fort.jpg";

import k8 from "./../Images/Gilgit-baltistan/Attabad3.jpg";

import k9 from "./../Images/Hussaini-bridge.jpg";

import k10 from "./../Images/Gilgit-baltistan/Polo-ground.jpg";

import k11 from "./../Images/Gilgit-baltistan/PH1.jpg";

import k12 from "./../Images/Gilgit-baltistan/Skardu1.jpg";

import k13 from "./../Images/Gilgit-baltistan/Shangrila1.jpg";

import k14 from "./../Images/Gilgit-baltistan/deosai8.jpg";

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

const Gilgit = () => {
  const classes = useStyles();
  return (
    <body>
      <h3 className={classes.head}>Gilgit Baltistan</h3>
      <p className={classes.text}>
        Gilgit Baltistan is the Queen of Pakistan. A beauty that cannot be
        captured by the camera. A place where you feel like dreaming with open
        eyes. A different view on each side. You will get confused to either
        look at the view on your front,back, right or left.Come and see the
        breathtaking views of Gilgit Baltistan and dream with open eyes.
      </p>
      <h3 className={classes.text}>Places to visist in Gilgit Baltistan</h3>
      <h3 className={classes.text}>KARAKORAM Highway-A wonder of the world</h3>

      <img src={k2} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>
        Junction of three world's greatest mountain ranges <br />
        Karakoram Himalayas Hindukush
      </h3>
      <img src={k3} className={classes.img} />
      <p>Details here</p>
      <h3 className={classes.text}>
        Nanga parbat(Naked peak)-The killer mountain{" "}
      </h3>

      <img src={k4} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>
        Khunjerab pass-China Border-Highest border in the world{" "}
      </h3>
      <img src={k5} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Hunza valley</h3>

      <img src={k6} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Baltit Fort-Hunza</h3>

      <img src={k7} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Attabad Lake</h3>
      <img src={k8} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Husseini Bridge</h3>
      <img src={k9} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Shandur-Worlds highest polo ground</h3>
      <img src={k10} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Phandar</h3>
      <img src={k11} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Skardu</h3>
      <img src={k12} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Shangrila-Skardu</h3>
      <img src={k12} className={classes.img} />
      <p className={classes.text}>Details here</p>
      <h3 className={classes.text}>Deosai plains</h3>
      <img src={k14} className={classes.img} />
      <p className={classes.text}>Details here</p>
    </body>
  );
};
export default Gilgit;
