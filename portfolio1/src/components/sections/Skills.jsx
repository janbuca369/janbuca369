import { useState } from "react";
import { DiJavascript1 } from 'react-icons/di'; // Adjust the import path as necessary
import classes from "./Skills.module.css";
import classes1 from './Techstack.module.css'
import SkillSet from "../UI/SkillSet";
import {
  faCss3,
  faFigma,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAd,
  faCode,
  faDrawPolygon,
  faImages,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiHtml5,
  SiFirebase,
  SiNextdotjs,
  SiCss3,
  SiPostgresql,
  SiPostman,
  SiSlack,
  SiVercel,
  SiHp,
  SiMysql,
  SiAdobephotoshop,
  SiOpenai,
  SiAdobepremierepro,
  SiAdobeindesign,
  SiAdobexd,
  SiAndroidstudio,
  SiDebian,
  SiThealgorithms,
  SiBootstrap,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiWindows,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";

function Skills() {
  const [developmentActive, setDevelopmentActive] = useState(true);
  const [designActive, setDesignActive] = useState(false);

  return (
    <div className={classes.skillContainer}>
      <div id="skills"></div>
      <motion.h1
        className={classes.sectionTitle}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Professional <strong className="purple">Skillset & </strong>{" "}
        <strong className="purple">Tools</strong> I use
      </motion.h1>

      <div className={classes.skillSelector}>
        <div
          className={`${classes.frontSelector} ${
            developmentActive && classes.active
          }`}
          onClick={() => {
            setDevelopmentActive(true);
            setDesignActive(false);
          }}
        >
          <FontAwesomeIcon icon={faCode} />{" "}
          <span className={classes.hideDev}>Skillset</span>
        </div>
        <div
          className={`${classes.backSelector} ${
            designActive && classes.active
          }`}
          onClick={() => {
            setDesignActive(true);
            setDevelopmentActive(false);
          }}
        >
          <FontAwesomeIcon icon={faPaintBrush} />{" "}
          <span className={classes.hideDes}>Tools</span>
        </div>
      </div>

      <div className={classes.skillsWrapper}>
        {developmentActive ? (
          <div className={classes1.header_wrapper}>
            <div className={`${classes.designSkills} ${classes.devNDesSkills}`}>
              <Row>
                <ul className={classes1.internal_wrapper}>
                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiHtml5 />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiCss3 />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiBootstrap />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiJavascript1 />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiNodejs />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiReact />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiNextdotjs />
                    </Col>
                  </li>

                  
                </ul>
              </Row>

              <Row>
                <ul>
                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiThealgorithms />
                    </Col>
                  </li>
                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiGit />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiFirebase />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiMysql />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiPython />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiJava />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <CgCPlusPlus />
                    </Col>
                  </li>
                </ul>
              </Row>

              {/* <SkillSet
              language={"Figma"}
              icon={faFigma}
              years={"1 year"}
              percent={"80%"}
            /> */}
              {/* <SkillSet
              language={"Adobe XD"}
              icon={faAd}
              years={"3 years"}
              percent={"80%"}
            /> */}
              {/* <SkillSet
              language={"Adobe Photoshop"}
              icon={faImages}
              years={"3 years"}
              percent={"60%"}
            /> */}
              {/* <SkillSet
              language={"Adobe Illustrator"}
              icon={faDrawPolygon}
              years={"3 years"}
              percent={"60%"}
            /> */}
              {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <CgCPlusPlus />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiJavascript1 />
                </Col>

                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiNodejs />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiReact />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiMongodb />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <SiNextdotjs />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiGit />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <SiFirebase />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <SiMysql />
                </Col>

                <Col xs={4} md={3} className={classes.tech_icons}>
                  <SiPostgresql />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiPython />
                </Col>
                <Col xs={4} md={3} className={classes.tech_icons}>
                  <DiJava />
                </Col>
              </Row> */}
            </div>
          </div>
        ) : (
          <div div className={classes1.header_wrapper}>
            <div className={`${classes.devSkills} ${classes.devNDesSkills}`}>
              <Row>
                <ul className={classes1.internal_wrapper}>
                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiHp />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <DiWindows />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiDebian />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <BiLogoVisualStudio />
                    </Col>
                  </li>
                </ul>
              </Row>

              <Row>
                <ul className={classes1.internal_wrapper}>
                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiPostman />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiAdobephotoshop />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiAdobeindesign />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiAdobexd />
                    </Col>
                  </li>
                </ul>
              </Row>

              {/* <Row>
                <ul>
                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiAdobepremierepro />
                    </Col>
                  </li>

                  <li>
                    <Col xs={4} md={2} className={`${classes.tech_icons} col`}>
                      <SiOpenai />
                    </Col>
                  </li>
                </ul>
              </Row> */}

              {/* <SkillSet
              language={"HTML"}
              icon={faHtml5}
              years={"5 years"}
              percent={"95%"}
            />
            <SkillSet
              language={"CSS"}
              icon={faCss3}
              years={"5 years"}
              percent={"95%"}
            />
            <SkillSet
              language={"JavaScript"}
              icon={faJsSquare}
              years={"4 years"}
              percent={"80%"}
            />
            <SkillSet
              language={"React"}
              icon={faReact}
              years={"3 years"}
              percent={"60%"}
            /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
