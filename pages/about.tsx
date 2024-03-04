import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2003, 10, 20);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

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
      <main className="about">
        
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About
              
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            Hey, I am Pramod Joshi. I am a dedicated and enthusiastic B.Tech. Computer Science student currently pursuing my education at {" "}
            <a
              href="https://bhimtal.gehu.ac.in/"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              Graphic Era Hill University.
            </a>{" "}
            With a strong passion for technology and a keen interest in the world of computers, I am determined to make the most of my academic journey. <br/><br/>
            My fascination with the ever-evolving field of computer science has driven me to explore various programming languages, algorithms, and software development methodologies. I believe that the blend of theoretical knowledge and hands-on experience is essential for success in this dynamic field, and I am committed to gaining both through my studies.
            <br/><br/>One of my aspirations is to contribute to cutting-edge technological advancements that can positively impact society. Whether it's developing innovative software solutions, improving user experiences, or working on artificial intelligence applications, I am eager to contribute my skills and knowledge to make a meaningful difference.
            {" "}
            <a
              href="https://open.spotify.com/playlist/2akHeWgVqLdf453oKj4lPH?si=ZdA5H7VMTm2OtjfdxFiEtg"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
             <br/><br/>
            </a>{" "}
            Apart from academics, I also believe in maintaining a well-rounded personality. I enjoy engaging in extracurricular activities, which include participating in sports, volunteering for community service, and being part of tech clubs that promote knowledge sharing and collaboration among students.{" "}
            <a
              href="https://laravel.cm/user/ln-dev7"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              
            </a>{" "}
            <br/><br/>I have also post the edcational content for tech-savvy students.{" "}
            <a
              href="#"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              
            </a>
         </motion.p>
         { <div className="about-illus">
          <Image
            src="/illustrations/7.png"
            alt="illustration"
            width={220}
            height={200}
          />
        </div> }
          <div className="about-left__links">
         
            <motion.a
              variants={item}
              href="https://drive.google.com/file/d/1IERPIq6tUboJIM0_GyBQTV8Qs56Y8fh5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
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
              </svg>{" "}
              Resume
            </motion.a>
            <motion.a
              variants={item}
              href="https://coding-with-fun.blogspot.com/"
              target="_blank"
              rel="noreferrer"
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
              </svg>{" "}
              Articles
            </motion.a>
           
          </div>
          <br/><br/><br/><br/>
        </motion.div>
        <motion.div
          className="about-right"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: "25%", opacity: 0 }}
          transition={{ duration: 0.75 }}
        ><br/><br/>
          <div className="about-right__image">
            <Image
              src="/images/pramod.png"
              alt="Pramod Joshi"
              width={3024}
              height={4032}
            />
          </div>
          
        </motion.div>
      </main>
    </>
  );
}
