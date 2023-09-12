import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image: string;
  }

  const works: Work[] = [
    {
      name: "Uber Data Analysis",
      url: "https://github.com/pramodjoshi22/Uber-Data-Analysis_Data-Engineering-Project",
      position: "Data Engineering",
      location: "Remote",
      date: "Jun 2023 - Aug 2023",
      description: "The goal of this project is to perform data analytics on Uber data using various tools and technologies, including GCP Storage, Python, Compute Instance, Mage Data Pipeline Tool, BigQuery, and Looker Studio.",
      stacks: ["Google Cloud Plateform", "Google Storage", "BigQuery", "Looker Studio"],
    },
    {
      name: "HR Data Analytics",
      url: "https://github.com/pramodjoshi22/HR-Data-Analytics",
      position: "Data Analysis",
      location: "Remote",
      date: "May 2023 - June 2023",
      description: "The primary goal of this project is to visualize and analyze employee attrition.",
      stacks: ["NextJS", "SASS"],
    },
    {
      name: "Super Store Sales Analysis",
      url: "https://www.mboadigital.tech/",
      position: "Data Analysis",
      location: "Remote",
      date: "March 2023 - April 2023",
      description:
        "The Power BI Super Store Sales Data Analytics project is a comprehensive data visualization and forecasting endeavor designed to provide actionable insights into the sales performance of a retail store. By harnessing the capabilities of Microsoft Power BI, this project aims to empower decision-makers with valuable information about historical sales trends and equip them with a reliable 15-day sales forecast.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "Modern Youtube Clone",
      position: "Front-end Developer",
      location: "Remote",
      date: "From June 2021",
      description:
        " a freelancer I have worked for many independent clients and agencies around the world, especially in the position of front-end developer and also web integrator, my goal is to create robust web applications with a good UI/UX.",
      stacks: ["React", "NextJS", "VueJS", "Svelte", "SCSS", "TypeScript"],
    },
    {
      name: "Human Activity Recognition ",
      url: "https://afritechh.com/",
      position: "Web Trainer",
      location: "Douala",
      date: "April 2021",
      description:
        "For two weeks I trained students to become apprentices in web development including the basics of HTML5 - CSS3 - JavaScript.",
      stacks: ["HTML", "CSS", "JS"],
    },
  ];
  const internships: Work[] = [
    {
      name: "Geeksforgeeks",
      url: "https://www.mboadigital.tech/",
      position: "Front-end Developer",
      location: "Yaoundé, Cameroon",
      date: "June 2022 - August 2022",
      description:
        "During this internship my main goal was the development of websites respecting very specific designs, it allowed me to increase my skills in ReactJS and also to work better in a team.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "E-cell IIT Bombay",
      url: "https://lohce.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "April 2022 - June 2022",
      description:
        "The main goal of this internship was to create a prototype chat bot to help people buy a travel ticket online.",
      stacks: ["React"],
    },
    {
      name: "Oasis Infobyte",
      url: "https://genuka.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "March 2022 - May 2022",
      description:
        "The main goal was the implementation of templates for Genuka stores through their API, I was also to form a team of two people for the accomplishment of this said task.",
      stacks: ["Svelte"],
    },
  ];
  const volunteerships: Work[] = [
    {
      name: "Team Everst ",
      url: "https://sharuco.lndev.me/",
      position: "FrontEnd Developer",
      location: "Remote",
      date: "March 2023 - Present",
      description: "Creator and developer of this web application",
      stacks: ["NextJS", "Shadcn/UI", "TypeScript", "Tailwind", "Firebase"],
    },
   
  ];
  const sideProjects: PersonalWork[] = [
    {
      name: "Uber Data Analysis",
      url: "https://sharuco.lndev.me/",
      image: "/projects/sharuco.png",
    },
    {
      name: "HR Data Analytics",
      url: "https://lnui.lndev.me/",
      image: "/projects/lnui.png",
    },
    {
      name: "Super Store Sales Analysis",
      url: "https://world-portfolios.vercel.app/",
      image: "/projects/world-portfolio.png",
    },
    {
      name: "Modern Youtube Clone",
      url: "https://sitrabcam-web.leonelngoya.com/",
      image: "/projects/sitrabcam.png",
    },
    {
      name: "Human Activity Recognition",
      url: "https://ulwo.lndev.me/",
      image: "/projects/ulwo.png",
    },
    {
      name: "Cryptomitra",
      url: "https://webappphotography.leonelngoya.com/",
      image: "/projects/1.png",
    },
    {
      name: "Oasis Infobyte",
      url: "https://canon-yaounde.leonelngoya.com/",
      image: "/projects/3.png",
    },
    {
      name: "Next.js Portfolio",
      url: "https://flutter-cameroon.leonelngoya.com/",
      image: "/projects/4.png",
    },
    
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };

  return (
    <>
      <Head>
        <title>Pramod Joshi</title>
        <meta
          name="description"
          content="
        I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/scd.ico" />
      </Head>
      <main className="experience">
        <div className="page__lines"></div>
        <motion.div
          className="experience-works"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-works__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
          <div className="experience-works__cards">
            {works.map((work, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{work.name}</h3>
                    <p>{work.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{work.date}</h3>
                    <p>{work.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{work.description}</p>
                </div>
                {work.stacks && (
                  <div className="card-stacks">
                    {work.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {work.url && (
                    <Link
                      href={work.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Internships
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {internships.map((internship, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{internship.name}</h3>
                    <p>{internship.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{internship.date}</h3>
                    <p>{internship.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{internship.description}</p>
                </div>
                {internship.stacks && (
                  <div className="card-stacks">
                    {internship.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {internship.url && (
                    <Link
                      href={internship.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Volunteerships
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {volunteerships.map((volunteership, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{volunteership.name}</h3>
                    <p>{volunteership.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{volunteership.date}</h3>
                    <p>{volunteership.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{volunteership.description}</p>
                </div>
                {volunteership.stacks && (
                  <div className="card-stacks">
                    {volunteership.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {volunteership.url && (
                    <Link
                      href={volunteership.url}
                      passHref
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="experience-personal"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-personal__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects Quickview
            </motion.h2>
          </div>
          <div className="experience-personal__cards">
            <div className="personal-view">
              {imageUrl && (
                <div className="personal-view__image">
                  <Image
                    src={imageUrl}
                    alt={imageName}
                    width={2880}
                    height={1576}
                  />
                </div>
              )}
              {/* <Imagesrc={"/projects/8.png"}
                alt={"hello"}
                width={2880}
                height={1576}
              /> */}
            </div>
            <ul className="personal-lists">
              {sideProjects.map((project, index) => (
                <motion.li key={index} variants={skillsItem}>
                  <Link
                    href={project.url}
                    passHref
                    onMouseEnter={() => {
                      cursorChangeHandler("hovered");
                      handleMouseEnter(project.image, project.name);
                    }}
                    onMouseLeave={() => {
                      cursorChangeHandler("");
                      handleMouseLeave();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <span>{project.name}</span>
                  </Link>
                </motion.li>
              ))}
              <h3>
                <Link
                  href="https://github.com/pramodjoshi22"
                  passHref
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                  <span>See more on GitHub</span>
                </Link>
              </h3>
            </ul>
          </div>
        </motion.div>
      </main>
    </>
  );
}
