import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Showcase.module.css";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import Projects from "../UI/Projects";
import { useEffect, useState } from "react";
import reactQuizImage from "../../assets/images/Showcase/hotel.jpg";
import netflixClone from "../../assets/images/Showcase/netflix1.jpg";
import amazonClone from "../../assets/images/Showcase/amazon.jpg";
import appleBootstrap from "../../assets/images/Showcase/appleBootstrap3.jpg";
import comingSoon from "../../assets/images/Showcase/comingSoon.jpg";
import { motion } from "framer-motion";

function Showcase() {
    const projectData = [
      {
        id: 0,
        name: "Blue moon hotel",
        description:
          "A hotel website built using HTML, CSS, and JavaScript provides a visually appealing and user-friendly platform for showcasing hotel features, booking rooms, and offering services. The HTML structure organizes content such as room details, amenities, and contact information, while CSS enhances the design with responsive layouts, elegant typography, and captivating visuals. JavaScript adds interactivity, such as image sliders, dynamic booking forms, and map integrations for location guidance. This website ensures a seamless user experience across devices, making it easy for visitors to explore the hotel and make reservations effortlessly..",
        image: reactQuizImage,
        languages: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/janbuca/Blue-moon-hotel",
        liveServer: "https://janbuca369.github.io/Blue-moon-hotel/",
      },

      {
        id: 1,
        name: "Car Rental",
        description:
          "This is a car rental application that allows users to rent cars for a specified duration. still in development phase and will be updated soon with more features and functionalities to make it a complete car rental application that can be used by car rental companies to manage their business operations.",
        image: comingSoon,
        languages: ["React", "Express.js", "MongoDB"],
        githubLink: "https://github.com/janbuca/Car-Rental",
        // liveServer: "https://janbuca369.github.io/Blue-moon-hotel/",
      },

      {
        id: 2,
        name: "Netflix Clone",
        description:
          "A Netflix Clone is a responsive and dynamic website built using HTML, CSS, and JavaScript, replicating the user interface and functionality of Netflix. It includes a visually appealing homepage with a carousel of movie or show thumbnails, categorized sections (e.g., Trending, Top Picks), The backend uses a database (e.g., Firebase Realtime Database or a REST API) to store and fetch content details such as titles, descriptions, genres, and streaming links.",
        image: netflixClone,
        languages: ["React", "Firebase", "TMDB"],
        githubLink: "https://github.com/janbuca/Netflix-Clone/",
        liveServer: "https://netflix-clone-abdf7.web.app/",
      },
      {
        id: 3,
        name: "Amazon Clone",
        description:
          "An Amazon Clone website built using React, Node.js, and Firebase offers a dynamic, full-stack e-commerce platform. The frontend, designed with React, provides a seamless user experience with features like product browsing, searching, and a responsive shopping cart.",
        image: amazonClone,
        languages: ["React", "NodeJs", "Firebase"],
        githubLink: "https://github.com/janbuca/Amazon-website-clone",
        liveServer: "https://clone-ef0ad.web.app/",
      },
      {
        id: 4,
        name: "Apple Clone",
        description:
          "Apple Clone website is a visually stunning and responsive React application designed to mimic the elegant design and seamless functionality of Apple's official website. Built with React.js, it features a modular component structure &  CSS for sleek, Apple-inspired styling.",
        image: appleBootstrap,
        languages: ["HTML", "CSS", "BootStrap4"],
        // githubLink: "https://github.com/naodalemu/quizee",
        liveServer: "https://apple-clone-react-4ccc8.web.app/",
      },
    ];

    const [index, setIndex] = useState(0);
    const [currentShowcase, setCurrentShowcase] = useState(projectData[index]);
    useEffect(() => {
        setCurrentShowcase(projectData[index]);
    }, [index]);

    function toggleLeft() {
        if (index > 0) {
            setIndex((index) => {
                return index - 1;
            });
        }
    }

    function toggleRight() {
        if (index < projectData.length - 1) {
            setIndex((index) => {
                return index + 1;
            });
        }
    }

    return (
        <div className={classes.ShowcaseSection}>
            <div id="showcase" className={classes.showRoom}></div>
            <motion.h1 className={classes.sectionName} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} >Showcase</motion.h1>
            <motion.div className={classes.showContainer} initial={{ x:-100, opacity: 0 }} whileInView={{ x:0, opacity: 1  }} transition={{ duration: 0.5 }}>
                <Projects
                    name={currentShowcase.name}
                    description={currentShowcase.description}
                    image={currentShowcase.image}
                    languages={currentShowcase.languages}
                    githubLink={currentShowcase.githubLink}
                    liveServer={currentShowcase.liveServer}
                    id={currentShowcase.id}
                />
                <motion.div className={classes.arrowContainer}>
                    <div className={classes.leftNRightContainer}>
                        <button
                            className={classes.toggleLeft}
                            onClick={toggleLeft}
                            style={
                                index === 0
                                    ? { color: "gray", border: "2px solid gray" }
                                    : null
                            }
                        >
                            <FontAwesomeIcon icon={faLeftLong} />
                        </button>
                        <button
                            className={classes.toggleRight}
                            onClick={toggleRight}
                            style={
                                index === projectData.length - 1
                                    ? { color: "gray", border: "2px solid gray" }
                                    : null
                            }
                        >
                            <FontAwesomeIcon icon={faRightLong} />
                        </button>
                    </div>
                    <div className={classes.statusBarContainer}>
                        <div
                            className={classes.statusBar}
                            style={{
                                width: `${
                                    (100 * index) / (projectData.length - 1)
                                }%`,
                            }}
                        ></div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Showcase;
