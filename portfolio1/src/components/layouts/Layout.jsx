import MainNavigation from "../UI/MainNavigation";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Showcase from "../sections/Showcase";
import Skills from "../sections/Skills";
import classes from "./Layout.module.css";
import FAQs from "../sections/faqs/FAQs"
import "../../index.css"

function Layout() {
  return (
    <div className={`${classes.mainLayout} dark`}>
      <MainNavigation />
      <Hero />
      <About />
      <Showcase />
      <Skills />
      <FAQs />
      <Contact />
    </div>
  );
}

export default Layout;
