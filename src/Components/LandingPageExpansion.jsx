import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./../LandingPage.css";
import n1 from "./../Images/Gilgit-baltistan/Shangrila1.jpg";
import n2 from "./../Images/Gilgit-baltistan/Skardu1.jpg";
import n3 from "./../Images/Gilgit-baltistan/Polo-ground.jpg";
import n4 from "./../Images/Gilgit-baltistan/The-beautiful-view-of-Kumrat-valley-Image.png";
import n5 from "./../Images/Gilgit-baltistan/katora-lake-3-960x500.jpg";
import n6 from "./../Images/Kashmir/Kashmir-NeelamValley.jpg";
import n7 from "./../Images/KPK/Sawat.jpg";

import p1 from "./../Images/Punjab/Chenab.jpg";
import p2 from "./../Images/Punjab/Derawar-fort.jpg";
import p4 from "./../Images/Punjab/Noor Mahal.jpg";
import p5 from "./../Images/Punjab/Katas-Raj-Temple.jpg";
import p6 from "./../Images/Punjab/Khewra-mines.jpg";

import p8 from "./../Images/Punjab/Harrapa_600x379.jpeg";

import b1 from "./../Images/Balochistan/B1.png";
import b2 from "./../Images/Balochistan/B10.png";
import b3 from "./../Images/Balochistan/B18.jpg";
import b4 from "./../Images/Balochistan/B13.png";
import b5 from "./../Images/Balochistan/B14.png";
import b6 from "./../Images/Balochistan/B9.png";
import b7 from "./../Images/Balochistan/B12.png";

import b8 from "./../Images/Balochistan/Balochistan2.jpg";
import b9 from "./../Images/Balochistan/Hannah-Lake.jpg";
import b10 from "./../Images/Balochistan/Hingol-bal.jpg";
import b11 from "./../Images/Balochistan/B111.jpg";
import b12 from "./../Images/Balochistan/B5.jpg";

import s1 from "./../Images/Sindha/s10.jpg";
import s2 from "./../Images/Sindha/S11.jpg";
import s3 from "./../Images/Sindha/s12.jpg";
import s4 from "./../Images/Sindha/s2.jpg";
import s5 from "./../Images/Sindha/Tomb_of_Nawab_Isa_Khan_Tarkhan_Makli_Thatta.jpg";
import s6 from "./../Images/Sindha/s4.jpg";
import s7 from "./../Images/Sindha/s7.jpg";
import s8 from "./../Images/Sindha/22-Sunset at Seaview, karachi-Sindh, Pakistan.jpg";
import s9 from "./../Images/Sindha/s3.jpg";
import s10 from "./../Images/Sindha/Hyderabad-museum1-1024x431.jpg";
import s11 from "./../Images/Sindha/s13.jpg";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "lightgreen",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bk: {
    backgroundColor: "lightgreen",
  },
  in: {
    display: "inline-block",
    textDecorationLine: "none",
  },
}));

const LandingPageExpansion = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Let's Explore Pakistan's untouched Beauty
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className={classes.bk}>
              <div id="slider1">
                <h3>North Pakistan</h3>

                <ul>
                  <li className={classes.in}>
                    <Typography>
                      <Link to="/kashmir">
                        <span className={classes.in}>Kashmir .</span>
                      </Link>
                    </Typography>
                  </li>
                  <li className={classes.in}>
                    <Typography>
                      <Link to="/gilgit">
                        <span className={classes.in}>Gilgit .</span>
                      </Link>
                    </Typography>
                  </li>
                  <li className={classes.in}>
                    <Typography>
                      <Link to="/kpk">
                        <span className={classes.in}>KPK</span>
                      </Link>
                    </Typography>
                  </li>
                </ul>

                <figure>
                  <img src={n1} />
                  <img src={n2} />
                  <img src={n3} />
                  <img src={n4} />
                  <img src={n5} />
                </figure>
              </div>
              <div id="slider1">
                <Typography>
                  <Link to="/punjab">
                    <span className={classes.in}>Punjab</span>
                  </Link>
                </Typography>
                <figure>
                  <img src={p1} />

                  <img src={p2} />

                  <img src={p4} />
                  <img src={p5} />

                  <img src={p6} />

                  <img src={p8} />
                </figure>
              </div>
              <div id="slider1">
                <Typography>
                  <Link to="/balochistan">
                    <span className={classes.in}>Balochistan</span>
                  </Link>
                </Typography>
                <figure>
                  <img src={b1} />
                  <img src={b2} />
                  <img src={b3} />
                  <img src={b4} />

                  <img src={b5} />

                  <img src={b7} />
                </figure>
              </div>
              <div id="slider1">
                <Typography>
                  <Link to="/sindh">
                    <span className={classes.in}>Sindh</span>
                  </Link>
                </Typography>
                <figure>
                  <img src={s1} />
                  <img src={s2} />

                  <img src={s3} />

                  <img src={s6} />
                  <img src={s7} />

                  <img src={s11} />
                </figure>
              </div>

              <div class="Contact">
                <p>
                  <h3>
                    <br />
                    Contact Us{" "}
                  </h3>
                  Get a travel guide online and have a safe and secure traveling
                  <br />
                  Our guides will help you explore the best places to visit,
                  <br /> Most beautiful,comfortable and economic hotels to stay
                  <br />
                  For details please visit our guides profiles on Guides info{" "}
                  <br />
                  Register to book Guide Now!
                  <br />
                </p>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LandingPageExpansion;
