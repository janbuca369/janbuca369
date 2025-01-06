import classes from "./MainNavigation.module.css";
import {
  // SiHyperskill,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { SiHyperskill } from "react-icons/si";

function MainNavigation() {
    return (
      <div className={classes.container}>
        <button className={classes.logo}>Janbuca</button>
        <ul className={classes.navContainer}>
          <a href="#home" className={classes.navbarLink}>
            <AiOutlineHome style={{ marginBottom: "2px" }} />
            <li>Home</li>
          </a>
          <a href="#about" className={classes.navbarLink}>
            <AiOutlineUser style={{ marginBottom: "2px" }} />
            <li>About</li>
          </a>
          <a href="#showcase" className={classes.navbarLink}>
            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
            <li>Projects</li>
          </a>
          <a href="#skills" className={classes.navbarLink}>
            <SiHyperskill style={{ marginBottom: "2px" }} />
            <li>Skills</li>
          </a>

          <a href="#contact" className={classes.navbarLink}>
            <AiOutlineContacts style={{ marginBottom: "2px" }} />
            <li>Contact</li>
          </a>

          <a href="https://github.com/janbuca" className={classes.navbarLink} target="_blank" >
            <FaGithub style={{ marginBottom: "2px" }} />
            <li>Github</li>
          </a>
        </ul>
      </div>
    );
}

export default MainNavigation;