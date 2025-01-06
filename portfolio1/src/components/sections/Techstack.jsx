import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import classes from "./Skills.module.css";
import classes1 from "./Techstack.module.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { div } from "framer-motion/client";


function Techstack() {
  return (
    <div className={classes1.header_wrapper}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <ul className={classes1.internal_wrapper}>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons}>
              <CgCPlusPlus />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons}>
              <DiJavascript1 />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons}>
              <DiNodejs />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons}>
              <DiReact />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons}>
              <DiMongodb />
            </Col>
          </li>
        </ul>

        <ul className={classes1.internal__wrapper}>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons1}>
              <SiNextdotjs />
            </Col>
          </li>
          <li>
            {" "}
            <Col xs={4} md={3} className={classes.tech_icons1}>
              <DiGit />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons1}>
              <SiFirebase />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons1}>
              <SiMysql />
            </Col>
          </li>
        </ul>

        <ul>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons2}>
              <SiPostgresql />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons2}>
              <DiPython />
            </Col>
          </li>
          <li>
            <Col xs={4} md={3} className={classes.tech_icons2}>
              <DiJava />
            </Col>
          </li>
        </ul>
      </Row>
    </div>
  );
}

export default Techstack;
