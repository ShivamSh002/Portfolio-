import React from 'react';
import styles from "./Skills.module.css";
import { MdHttp } from "react-icons/md";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { ImGit } from "react-icons/im";
import { IoLogoNodejs } from "react-icons/io5";
import { DiLinux } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbLetterM } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <MdHttp />, label: "HTTP" },
    { icon: <IoLogoHtml5 />, label: "HTML5" },
    { icon: <IoLogoCss3 />, label: "CSS3" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <ImGit />, label: "Git" },
    { icon: <IoLogoNodejs />, label: "JavaScript" },
    { icon: <DiLinux />, label: "Linux" },
    { icon: <FaReact />, label: "React" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <TbLetterM />, label: "Mongoose" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <FaAws />, label: "AWS" },
    { icon: <FaDocker />, label: "Docker" }
  ];

  return (
    <div className={styles.skillsWrapper}>
      <p className={styles.heading}>Skills Acquired
      </p>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.logo}>{skill.icon}</div>
            <p className={styles.subheading}>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
