import React, { useRef, useState } from 'react';
import ReactDOM from "react-dom";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import classes from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Contact1 from "./contact/Contact";
import Contact2 from "./contactadd/Contact";


// 


import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
    let date = new Date();
    let year = date.getFullYear();

    const form = useRef();
    const senderNameRef = useRef()
    const senderEmailRef = useRef()
    const messageSubjectRef = useRef()
    const contactMessageRef = useRef()
    const contactList = useRef()
    const [ successModal, setSuccessModal ] = useState(false);
    const [ FailedModal, setFailedModal ] = useState(false);
    const [ loading, setLoading ] = useState(false)



    return (
      <div className={classes.contactSection}>
        <div id="contact" className={classes.contactMargin}></div>
        <motion.h1
          className={classes.contactSectionName}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={classes.contactSectionName}>
            Feel free to connect with me
          </h3>
        </motion.h1>
        {/* <Contact1 /> */}
        <motion.form
          ref={form}
          className={classes.contactContainer}
          // onSubmit={sendEmail}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={classes.firstContactInfo}>
            {/* <div className={classes.emailContainer}>
              <label htmlFor="senderEmail" className={classes.senderEmailLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="senderEmail"
                ref={senderEmailRef}
                className={`${classes.senderEmail} ${classes.contactInput}`}
                name="senderEmail"
                placeholder="janbuca369@gmail.com"
                required
              />
            </div> */}

            {/* <div className={classes.subjectContainer}>
              <label
                htmlFor="messageSubject"
                className={classes.messageSubjectLabel}
              >
                Subject (optional)
              </label>
              <input
                type="text"
                id="messageSubject"
                ref={messageSubjectRef}
                className={`${classes.messageSubject} ${classes.contactInput}`}
                name="messageSubject"
                placeholder="To talk about a job I have"
              />
            </div> */}

            <Contact1 />
            <div className={classes.nameContainer}>
              <label htmlFor="senderName" className={classes.senderNameLabel}>
                Connect with me: <br /> If you have any question, a project in
                mind, or just working together want to connect, feel free to
                reach out.
              </label>
              {/* <input
                type="text"
                id="senderName"
                ref={senderNameRef}
                className={`${classes.senderName} ${classes.contactInput}`}
                name="senderName"
                placeholder="Janbuca teshome"
                required
              /> */}
            </div>
          </div>

          <div className={classes.lastContactInfo}>
            {/* <textarea
              id="contactMessage"
              ref={contactMessageRef}
              className={classes.contactMessage}
              name="contactMessage"
              placeholder="Write your message here..."
              required
            ></textarea> */}

            {/* <button
              className={classes.contactButton}
              type="submit"
              href="mailto:janbuca333@gmail.com"
            >
              Send my
            </button> */}

            {/* {loading ? (
              <div className={classes.messageContainer}>
                <div className={classes.message}>Sending...</div>
              </div>
            ) : null} */}

            {/* {successModal ? (
              <div className={classes.messageContainer}>
                <div className={classes.message} style={{ color: "green" }}>
                  Successfully Sent
                </div>
              </div>
            ) : null} */}
            {/* {FailedModal ? (
              <div
                className={`${classes.messageContainer} ${classes.failedMessageContainer}`}
              >
                <div className={classes.message} style={{ color: "firebrick" }}>
                  Failed! Please check your internet connection
                </div>
              </div>
            ) : null} */}

            <Contact2 />
            <div className={classes.nameContainer}>
              <label htmlFor="senderName" className={classes.senderNameLabel}>
                Join me on this creative journey!{" "} <br /> 
                Follow along on social media to explore my latest
                projects, gain insights into my work process, and connect with a
                community that shares a passion and Inspired
              </label>
              {/* <input
                type="text"
                id="senderName"
                ref={senderNameRef}
                className={`${classes.senderName} ${classes.contactInput}`}
                name="senderName"
                placeholder="Janbuca teshome"
                required
              /> */}
            </div>
          </div>
        </motion.form>

        <div className={classes.contactLinksContainer}>
          <ul className={classes.contactLinks} ref={contactList}>
            <a>
              <motion.li
                style={{ position: "relative" }}
                className={`${classes.contactLink} ${classes.UpWork}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h5 md="4" className={classes.footer_copywright}>
                  Developed by Janbuca
                </h5>
                {/* <h5>Copyright © {year} SB</h5> */}
              </motion.li>
            </a>

            {/* <a href="https://t.me/janbuca/" target="_blank">
              <motion.li
                className={`${classes.contactLink} ${classes.telegram}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FontAwesomeIcon icon={faTelegram} />
              </motion.li>
            </a> */}

            {/* <h5 md="4" className={classes.footer_copywright}>
              Developed by Janbuca
            </h5> */}

            <h5 className={classes.footer_copywright}>Copyright © {year} JT</h5>

            {/* <a href="https://wa.me/+251912153874" target="_blank">
              <motion.li
                className={`${classes.contactLink} ${classes.whatsApp}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </motion.li>
            </a> */}
            {/* <a href="https://instagram.com/janbuca" target="_blank">
              <motion.li
                className={`${classes.contactLink} ${classes.instagram}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.li>
            </a> */}

            {/* <a href="https://x.com/janbuca369/" target="_blank">
              <motion.li
                className={`${classes.contactLink} ${classes.twitter}`}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </motion.li>
            </a> */}
          </ul>
        </div>

        {/* <section fluid className={classes.footer}>
          <section>
            <div md="4" className={classes.footer_copywright}>
              <h5>Designed and Developed </h5>
            </div>
            <div md="4" className={classes.footer_copywright}></div>
            <section md="4" className={classes.footer_body}>
              <ul className={classes.footer_icons}>
                <li className={classes.social_icons}>
                  <a
                    href="https://github.com/soumyajit4419"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className={classes.social_icons}>
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className={classes.social_icons}>
                  <a
                    href="https://www.linkedin.com/in/soumyajit4419/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className={classes.social_icons}>
                  <a
                    href="https://www.instagram.com/soumyajit4419"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section> */}
      </div>
    );

    
}

export default Contact;