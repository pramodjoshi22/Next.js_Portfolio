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
      description: "",
      stacks: ["Google Cloud Plateform", "Google Storage", "BigQuery", "Looker Studio"],
    },
    {
      name: "HR Data Analytics",
      position: "Freelance FrontEnd Developer",
      location: "Remote",
      date: "January 2023 - July 2023",
      description:
        "Development of the front-end of the Gloovee web application",
      stacks: ["NextJS", "SASS"],
    },
    {
      name: "Super Store Sales Analysis",
      url: "https://www.mboadigital.tech/",
      position: "Digital Consultant",
      location: "Yaoundé, Cameroon",
      date: "August 2022 - April 2023",
      description:
        "More than a front-end developer, I am here a Digital consultant. My goal is to design robust web applications with good UI/UX. While working as a team.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "Freelance",
      position: "Front-end Developer",
      location: "Remote",
      date: "From June 2021",
      description:
        " a freelancer I have worked for many independent clients and agencies around the world, especially in the position of front-end developer and also web integrator, my goal is to create robust web applications with a good UI/UX.",
      stacks: ["React", "NextJS", "VueJS", "Svelte", "SCSS", "TypeScript"],
    },
    {
      name: "AfritechHub",
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
      name: "Mboa Digital",
      url: "https://www.mboadigital.tech/",
      position: "Front-end Developer",
      location: "Yaoundé, Cameroon",
      date: "June 2022 - August 2022",
      description:
        "During this internship my main goal was the development of websites respecting very specific designs, it allowed me to increase my skills in ReactJS and also to work better in a team.",
      stacks: ["ReactJS", "Framer Motion", "TypeScript", "JavaScript", "SASS"],
    },
    {
      name: "LOHCE",
      url: "https://lohce.com/",
      position: "Front-end Developer",
      location: "Remote",
      date: "April 2022 - June 2022",
      description:
        "The main goal of this internship was to create a prototype chat bot to help people buy a travel ticket online.",
      stacks: ["React"],
    },
    {
      name: "Genuka",
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
      name: "Sharuco",
      url: "https://sharuco.lndev.me/",
      position: "FrontEnd Developer",
      location: "Remote",
      date: "March 2023 - Present",
      description: "Creator and developer of this web application",
      stacks: ["NextJS", "Shadcn/UI", "TypeScript", "Tailwind", "Firebase"],
    },
    {
      name: "Awwwards",
      url: "https://www.awwwards.com/jury-member/ln-dev",
      position: "Awwwards Young Jury",
      location: "Remote",
      date: "February 2023 - Present",
      description:
        "Member of the awwwards jury, a group of leading digital design professionals who use their experience and knowledge to judge web projects from all over the world.",
    },
  ];
  const sideProjects: PersonalWork[] = [
    {
      name: "Sharuco",
      url: "https://sharuco.lndev.me/",
      image: "/projects/sharuco.png",
    },
    {
      name: "LNUI",
      url: "https://lnui.lndev.me/",
      image: "/projects/lnui.png",
    },
    {
      name: "World Portfolios",
      url: "https://world-portfolios.vercel.app/",
      image: "/projects/world-portfolio.png",
    },
    {
      name: "Sitrabcam",
      url: "https://sitrabcam-web.leonelngoya.com/",
      image: "/projects/sitrabcam.png",
    },
    {
      name: "Ulwo App",
      url: "https://ulwo.lndev.me/",
      image: "/projects/ulwo.png",
    },
    {
      name: "Web App Photography",
      url: "https://webappphotography.leonelngoya.com/",
      image: "/projects/1.png",
    },
    {
      name: "Canon Yaounde",
      url: "https://canon-yaounde.leonelngoya.com/",
      image: "/projects/3.png",
    },
    {
      name: "Flutter Cameroon",
      url: "https://flutter-cameroon.leonelngoya.com/",
      image: "/projects/4.png",
    },
    {
      name: "ESF Website",
      url: "https://esf-website.leonelngoya.com/",
      image: "/projects/7.png",
    },
    {
      name: "Warifa",
      url: "https://warfira.leonelngoya.com/",
      image: "/projects/8.png",
    },
    {
      name: "Peef Dev",
      url: "https://peef.leonelngoya.com/",
      image: "/projects/5.png",
    },
    {
      name: "CamerDjoss",
      url: "https://camer-djoss.leonelngoya.com/",
      image: "/projects/6.png",
    },
    {
      name: "Queen Elizabeth II",
      url: "https://queenelizabeth2.leonelngoya.com/",
      image: "/projects/2.png",
    },
    {
      name: "Pro Chakra UI",
      url: "https://pro-chakra-ui-web.vercel.app/",
      image: "/projects/pro-chakra-ui.png",
    },
    {
      name: "App Expenses",
      url: "https://app-expenses.vercel.app/",
      image: "/projects/15.png",
    },
    {
      name: "Monarc",
      url: "https://monarc.leonelngoya.com/",
      image: "/projects/10.png",
    },
    {
      name: "App Formation",
      url: "https://app-formation.leonelngoya.com/",
      image: "/projects/9.png",
    },
    {
      name: "GitHub User",
      url: "https://githubuser.vercel.app/",
      image: "/projects/14.png",
    },
    {
      name: "Grid Animation",
      url: "https://lndev-grid-animation-1.vercel.app/",
      image: "/projects/16.png",
    },
    {
      name: "Cameroon Logos",
      url: "https://cameroon-logos.vercel.app/",
      image: "/projects/11.png",
    },
    {
      name: "Star Wars",
      url: "https://star-wars-lime.vercel.app/",
      image: "/projects/12.png",
    },
    {
      name: "Space Tourism",
      url: "https://space-tourism-ln-dev7.vercel.app/",
      image: "/projects/13.png",
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
                  href="https://github.com/ln-dev7?tab=repositories"
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
