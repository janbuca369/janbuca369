import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from "./Skills.module.css";
import {
  // SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiHp,
  SiMysql,
  SiAdobephotoshop,
  SiOpenai,
  SiAdobepremierepro,
  SiAdobeindesign,
  SiAdobexd,
  SiAndroidstudio,
  SiDebian,
} from "react-icons/si";

import {DiWindows} from "react-icons/di";

function Toolstack() {
  return (
    <Container fluid>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiHp />
        </Col>

        <Col xs={4} md={3} className={classes.tech_icons}>
          <DiWindows />
        </Col>

        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiDebian />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiPostman />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          {" "}
          <SiAdobephotoshop />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiAdobeindesign />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiAdobexd />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiAdobepremierepro />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiOpenai />
        </Col>
        <Col xs={4} md={3} className={classes.tech_icons}>
          <SiAndroidstudio />
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;
