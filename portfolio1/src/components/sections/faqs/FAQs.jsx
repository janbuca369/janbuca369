import faqs from './data'
import FAQ from './FAQ'
import classes from "../Contact.module.css";
import { motion } from "framer-motion";
import './faqs.css'

const FAQs = () => {
  return (
    <div className={classes.contactSection}>
      {/* <div id="contact" className={classes.contactMargin}></div> */}
      <section id="faqs">
        <motion.h1
          className={classes.sectionName}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={classes.contactSectionName}>
            Frequently Asked Questions
          </h2>
        </motion.h1>

        <h5 className={classes.contactSectionName}>
          Here are some questions I usually get. Click to toggle the answer, and
          if you still have some more questions, shoot me a message from the
          contact section!
        </h5>
        <div className="container faqs__container">
          {faqs.map((faq) => (
            <FAQ key={faq.id} faq={faq} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQs