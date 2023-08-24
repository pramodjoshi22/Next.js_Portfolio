import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, skillsItem } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Skills() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Skill {
    url: string;
    name: string;
    color: string;
    colorRGB: string;
    isBgBlack?: boolean;
  }
  interface SkillSection {
    title: string;
    skills: Skill[];
  }

  interface Certifications {
    name: string;
    url: string;
  }
  const allSkills: SkillSection[] = [
    {
      title: "Web",
      skills: [
        // {
        //   url: "https://www.svgrepo.com/show/452228/html-5.svg",
        //   name: "HTML",
        //   color: "#E34F26",
        //   colorRGB: "227, 79, 38",
        // },
        // {
        //   url: "https://www.svgrepo.com/show/452185/css-3.svg",
        //   name: "CSS",
        //   color: "#1572B6",
        //   colorRGB: "21, 114, 182",
        // },
        {
          url: "https://www.svgrepo.com/show/354310/sass.svg",
          name: "SASS",
          color: "#CC6699",
          colorRGB: "204, 102, 153",
        },
        {
          url: "https://www.svgrepo.com/show/353925/javascript.svg",
          name: "JavaScript",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
      //{
     //     url: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
    //      name: "TypeScript",
     //     color: "#3178C6",
     //     colorRGB: "49, 120, 198",
     //   },
        {
          url: "https://www.svgrepo.com/show/354259/react.svg",
          name: "React",
          color: "#61DAFB",
          colorRGB: "97, 218, 251",
        },
        {
          url: "https://www.svgrepo.com/show/369457/nextjs.svg",
          name: "NextJS",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/374109/svelte.svg",
          name: "Svelte",
          color: "#FF3E00",
          colorRGB: "255, 62, 0",
        },
        {
          url: "https://www.svgrepo.com/show/452130/vue.svg",
          name: "Vue",
          color: "#4FC08D",
          colorRGB: "79, 192, 141",
        },
        {
          url: "https://www.svgrepo.com/show/374118/tailwind.svg",
          name: "TailwindCSS",
          color: "#38B2AC",
          colorRGB: "56, 178, 172",
        },
        {
          url: "https://www.svgrepo.com/show/354048/material-ui.svg",
           name: "MUI",
           color: "#0081CB",
         colorRGB: "0, 129, 203",
         },
        {
         url: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
         name: "NodeJS",
         color: "#0B9110",
         colorRGB: "79, 192, 141",
         },
         {
          url: "https://www.svgrepo.com/show/353657/django-icon.svg",
          name: "Django",
          color: "#03540F",
          colorRGB: "3, 84, 15",
          },
      ],
    },
    // {
    //   title: "Documentation",
    //   skills: [
    //     {
    //       url: "https://nextra.site/_next/static/media/favicon.69cb336f.svg",
    //       name: "Nextra",
    //       color: "#000000",
    //       colorRGB: "0, 0, 0",
    //       isBgBlack: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Mobile",
    //   skills: [
    //     {
    //       url: "https://www.svgrepo.com/show/373604/flutter.svg",
    //       name: "Flutter",
    //       color: "#02569B",
    //       colorRGB: "2, 86, 155",
    //     },
    //     {
    //       url: "https://www.svgrepo.com/show/354259/react.svg",
    //       name: "React Native",
    //       color: "#61DAFB",
    //       colorRGB: "97, 218, 251",
    //     },
    //   ],
    // },
    {
      title: "Analytics",
      skills: [
        {
          url: "https://www.svgrepo.com/show/303193/microsoft-excel-2013-logo.svg",
          name: "Microsoft Excel",
          color: "#0B9110",
          colorRGB: "79, 192, 141",
          isBgBlack: true,
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
          name: "PowerBI",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/354012/looker-icon.svg",
          name: "Looker",
          color: "#21CBED",
          colorRGB: "79, 192, 141",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Cloud & Database",
      skills: [
        {
          url: "https://imgs.search.brave.com/XlHyKIEsI6kw5n8jOC1-7B8YJ2S3TFYwgRmVXBjvV1w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvZy84/Ny9nb29nbGUtY2xv/dWQuc3Zn.svg",
          name: "GCP",
          color: "#F7DF5F",
          colorRGB: "247, 223, 30",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/331488/mongodb.svg",
          name: "MongoDB",
          color: "#0B9110",
          colorRGB: "79, 192, 141",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/473731/mysql.svg",
          name: "MYSQL",
          color: "#3789ED",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "AI & Machime Learning",
      skills: [
        {
          url: "https://www.svgrepo.com/show/354238/python.svg",
          name: "Python",
          color: "#073EBD",
          colorRGB: "7, 61, 189",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/353949/jupyter.svg",
          name: "Jupyter",
          color: "#F27D16",
          colorRGB: "242, 125, 22",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/354440/tensorflow.svg",
          name: "Tensorflow",
          color: "#F27D16",
          colorRGB: "242, 125, 22",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/354240/pytorch.svg",
          name: "Pytorch",
          color: "#F53505",
          colorRGB: "245, 53, 5",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          url: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
          name: "Vercel",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/376339/netlify.svg",
          name: "Netlify",
          color: "#3789ED",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/331424/heroku.svg",
          name: "Heroku",
          color: "#2A55D4",
          colorRGB: "42, 85, 212",
          isBgBlack: true,
        },
      ],
    },
    
    {
      title: "Other",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452210/git.svg",
          name: "Git",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://www.svgrepo.com/show/512317/github-142.svg",
          name: "GitHub",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://www.svgrepo.com/show/452202/figma.svg",
          name: "Figma",
          color: "#F24E1E",
          colorRGB: "242, 78, 30",
        },
        {
          url: "https://www.svgrepo.com/show/373595/firebase.svg",
          name: "Firebase",
          color: "#FFCA28",
          colorRGB: "255, 202, 40",
        },
         {
            url: "https://www.svgrepo.com/show/374171/vscode.svg",
            name: "VSCode",
            color: "#007ACC",
            colorRGB: "0, 122, 204",
         },
      ],
    },
  ];
  const certifications: Certifications[] = [
    
    {
      name: "LinkedIn Learning",
      url: "https://drive.google.com/drive/folders/1U677r2Nnmtq8pm8klai63iOYFMSuWxl6?usp=share_link",
    },
  ];
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
      <main className="skills">
        <div className="page__lines"></div>
        {allSkills.map((skill, index) => (
          <motion.div
            className="skills-section"
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              className="skills-section__title"
              style={{ overflow: "hidden" }}
            >
              <motion.h2
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {skill.title}
              </motion.h2>
            </div>
            <div className="skills-section__cards">
              {skill.skills.map((skill, index) => (
                <div
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className={skill.isBgBlack ? "card card-black" : "card"}
                    key={index}
                    variants={skillsItem}
                  >
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                        border: `1px solid ${skill.color}`,
                      }}
                    >
                      <Image
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="skills-certif"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="skills-certif__title">
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Certifications
            </motion.h2>
          </div>
          <ul className="skills-certif__cards">
            {certifications.map((certif, index) => (
              <motion.li key={index} variants={skillsItem}>
                <Link
                  href={certif.url}
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
                  <span>{certif.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </>
  );
}
