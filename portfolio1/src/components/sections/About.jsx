import {
  fa3,
  faAd,
  faLongArrowAltRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import TW from "../UI/TextWrapper";
import classes from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faFigma,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import developer from "../../assets/images/darkDev.jpg";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";
import ResumeNew from "./ResumeNew";

function About() {
  return (
    <motion.div
      className={classes.aboutContainer}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.aboutExplanation}>
        {/* Know Who <strong className="purple">I'M</strong> */}
        <h2 className={classes.aboutTitle}>
          {" "}
          Know who <strong className={classes.purple}>I'm</strong>
        </h2>
        <p className={classes.aboutDescription}>
          Hi Everyone, I am <span className={classes.purple}>Firew Kifle </span>
          from <span className={classes.purple}> Addis Ababa, Ethiopia.</span>
          <br />I am currently web developer in{" "}
          <span className={classes.purple}>Freelancer </span> &
          <span className={classes.purple}>
            {" "}
            computer science Student in Unity university
          </span>
          <p>
            I love <span className={classes.purple}>programming</span> so much
            and <span className={classes.purple}>web developement</span> more
            than anything
          </p>
          <br />
          Apart from coding, some other activities that I love to do! <br />
          <ul>
            <li className={classes.about_activity}>
              <ImPointRight /> Video editing for social media
            </li>
            <li className={classes.about_activity}>
              <ImPointRight /> Reading books
            </li>
            <li className={classes.about_activity}>
              <ImPointRight /> Playing football with friends
            </li>
            <li className={classes.about_activity}>
              <ImPointRight /> Writing content 
            </li>
          </ul>
          {/* <TW fa={faHtml5}> HTML</TW>, <TW fa={faCss3}> CSS</TW>,{" "} */}
          {/* <TW fa={faJsSquare}> JavaScript</TW> and <TW fa={faReact}> React</TW>.
          Even this website is made using React. but I am not just a programmer,
          I create amazing UI and UX as a website designer too. With skills of
          both <TW fa={faFigma}> Figma</TW> and <TW fa={faAd}> Adobe XD</TW> I
          am proud to say that I have spent <FontAwesomeIcon icon={fa3} /> */}
          {/* <FontAwesomeIcon icon={faPlus} /> years designing websites. */}
          <p
            className={classes.blockquote_footer}
            style={{ color: "rgb(155 126 172)" }}
          >
            "Firest rule of programming If it works then Don't Touth it"{" "}
            <footer
              className={classes.blockquote_footer1}
              // className="blockquote-footer"
            >
              እራስህ ለራስህ
            </footer>
          </p>
        </p>
        <ResumeNew />
        {/* <button className={classes.gitContact}>
          <a href="https://github.com/janbuca" target="blank">
            <TW fa={faGithub}>
              {" "}
              Take a look <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </TW>
          </a>
        </button> */}
      </div>

      <div
        className={classes.aboutImage}
        style={{
          background: `url(${developer})`,
          backgroundPositionX: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className={classes.imageContainer}>
          <img src={developer} className={classes.image} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
