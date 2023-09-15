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
  const patents: Work[] = [
    {
      name: "Heated Helmet for motorcycle riders",
      url: "https://drive.google.com/file/d/1SjVSmhrE1QU4NyVQ2-AsXKUj1Aqd4SMo/view?usp=sharing",
      position: "Patent Published",
      location: "Remote",
      date: "26 May 2023",
      description: "Developed a prototype of a heated helmet for motorcycle riders. It provide exceptional warmth and comfort during rides. This helmet features an integrated heated padding system that effectively warms the rider's head. A soft and cushioned electric warmer is securely attached to the helmet, ensuring a cozy experience.The helmet operates using rechargeable batteries.",
      stacks: ["Patent", "Journal"],
    },
  ]
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
      stacks: ["PowerBI", "DAX Queries","Microsoft Excel"],
    },
    {
      name: "Super Store Sales Analysis",
      url: "https://github.com/pramodjoshi22/Sales-Data-Analysis",
      position: "Data Analysis",
      location: "Remote",
      date: "March 2023 - April 2023",
      description:
        "The Power BI Super Store Sales Data Analytics project is a comprehensive data visualization and forecasting endeavor designed to provide actionable insights into the sales performance of a retail store. By harnessing the capabilities of Microsoft Power BI, this project aims to empower decision-makers with valuable information about historical sales trends and equip them with a reliable 15-day sales forecast.",
        stacks: ["PowerBI", "DAX Queries","Microsoft Excel"],
    },
    {
      name: "Modern Youtube Clone",
      url: "",
      position: "Front-end Developement",
      location: "Remote",
      date: "November 2022",
      description:
        "Developed a Youtube clone with some new features and auto ad. skip feature.",
      stacks: ["React", "NextJS", "RapidAPI", "SCSS"],
    },
    {
      name: "We Code Club Website",
      url: "https://wecodegehu.netlify.app/",
      position: "Developer",
      location: "On-site",
      date: "August 2022",
      description:
        "Developed a fully functional dynamic website for tech-savvy students.",
      stacks: ["HTML", "CSS", "JS","Bootstrap"],
    },
    {
      name: "Human Activity Recognition ",
      url: "",
      position: "Evaluation of Models",
      location: "Remote",
      date: "December 2021",
      description:
        "Every year, an estimated 684,000 deathttps://modernyoutubee.netlify.apphs occur globally due to falls. Hence, the motivation behind this project is to detect falls through postural changes.",
      stacks: ["SVM", "ANN", "CNNLSTM"],
    },
  ];
  const internships: Work[] = [
    {
      name: "Geeksforgeeks",
      url: "https://drive.google.com/file/d/1Cv4KCbCysNmK6nPsUgcfR9SRDTFhOamV/view",
      position: "Technical Content Writer",
      location: "Remote",
      date: "March 2023 - June 2023",
      description:"During this internship my main goal was to produce technical content on computer science related subjeccts.",
      stacks: ["Compiler Design", "Computer Network", "Finite Automata"],
    },
    {
      name: "E-cell IIT Bombay",
      url: "https://drive.google.com/file/d/1SH1abzsevXLoaqyhei2DThpgP9FVl74S/view",
      position: "Entrepreneurial Education",
      location: "Remote",
      date: "July 2022 - March 2023",
      description:
        "This internship's main aim is to spread entrepreneurship education among college students.",
      stacks: ["NEC","Eureka Junior","EnSpace"],
    },
    {
      name: "Oasis Infobyte",
      url: "https://drive.google.com/file/d/1AKQb9MxPqsfKlvx2V88_nEK-V4MLzDho/view",
      position: "Front-end Development",
      location: "Remote",
      date: "March 2022 - May 2022",
      description:
        "The main goal was the implementation of templates for Genuka stores through their API, I was also to form a team of two people for the accomplishment of this said task.",
      stacks: ["HTML","CSS","Javascript","Bootstrap"],
    },
  ];
  const Contribution: Work[] = [
    {
      name: "Questdb ",
      url: "https://github.com/pramodjoshi22/questdb",
      position: "Contributor",
      location: "Remote",
      date: "February 2022 - April 2022",
      description: "Help to create an open source time-series database for fast ingest and SQL queries.",
      stacks: ["Questdb", "Docker", "REST API", "Rust"],
    },
    {
      name: "Welcome to Open Source",
      url: "https://github.com/pramodjoshi22/Welcome-to-Open-Source",
      position: "Contributor",
      location: "Remote",
      date: "June 2022 - Novomber 2022",
      description: "Make your first PR request! And enter the world of Open Source Contributions ",
      stacks: ["Open Source", "Basics"],
    },
   
  ];
  const volunteerships: Work[] = [
    {
      name: "Team Everst ",
      url: "https://drive.google.com/file/d/1HVIcInh8PGJL2IZlJbtc3gGlyGkezM2q/view?usp=sharing",
      position: "Curriculum Writing",
      location: "Remote",
      date: "January 2022 - Febuary 2022",
      description: "Developed a curriculum book for teaching English to children.",
      stacks: ["volunteership", "NGO"],
    },
   
  ];
  const sideProjects: PersonalWork[] = [
    {
      name: "Uber Data Analysis",
      url: "https://github.com/pramodjoshi22/Uber-Data-Analysis_Data-Engineering-Project",
      image: "/projects/1.png",
    },
    {
      name: "HR Data Analytics",
      url: "https://github.com/pramodjoshi22/HR-Data-Analytics",
      image: "/projects/2.png",
    },
    {
      name: "Super Store Sales Analysis",
      url: "https://github.com/pramodjoshi22/Sales-Data-Analysis",
      image: "/projects/3.png",
    },
    {
      name: "Modern Youtube Clone",
      url: "https://modernyoutubee.netlify.app",
      image: "/projects/4.png",
    },
    {
      name: "Human Activity Recognition",
      url: "https://github.com/pramodjoshi22/Human-Activity-Recognition",
      image: "/projects/5.jpg",
    },
    {
      name: "Cryptomitra",
      url: "https://github.com/pramodjoshi22/crytomitra.github.in",
      image: "/projects/6.png",
    },
    {
      name: "Oasis Infobyte",
      url: "https://drive.google.com/file/d/1AKQb9MxPqsfKlvx2V88_nEK-V4MLzDho/view",
      image: "/projects/7.jpg",
    },
    {
      name: "Next.js Portfolio",
      url: "https://singlecoredevelopers.tech/",
      image: "/projects/8.png",
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
            Patents
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {patents.map((patents, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{patents.name}</h3>
                    <p>{patents.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{patents.date}</h3>
                    <p>{patents.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{patents.description}</p>
                </div>
                {patents.stacks && (
                  <div className="card-stacks">
                    {patents.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {patents.url && (
                    <Link
                      href={patents.url}
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
                      <span>
                            View Journal</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
                      <span>Certificate</span>
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
              Open Source Contributation 
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {Contribution.map((Contribution, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{Contribution.name}</h3>
                    <p>{Contribution.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{Contribution.date}</h3>
                    <p>{Contribution.location}</p>
                  </div>
                </div>
                <div className="card-description">
                  <p>{Contribution.description}</p>
                </div>
                {Contribution.stacks && (
                  <div className="card-stacks">
                    {Contribution.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {Contribution.url && (
                    <Link
                      href={Contribution.url}
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
                      <span>Certificate</span>
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
