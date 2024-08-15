import React from 'react'
import styles from "./HeroSection.module.css"
import  Avatar  from '../Assests/file (1).png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Resume from "../Assests/cv.pdf"
import {HashLink as Link} from "react-router-hash-link"

const linkStyle = { color: "white", textDecoration: 'none' };

const HeroSection = () => {
  
  return (
    <div className={styles.heroWrapper}><div className={styles.leftWrapper}><div className={styles.wrapper} id='Home'><h2>Hi I am</h2> 
    <h1>Shivam Sharma</h1>
     <p>FULLSTACK DEVELOPER</p>
     <div className={styles.iconsWrapper}>
        <div className={styles.icons}><a href="https://github.com/ShivamSh002" target='blank'><GitHubIcon/></a></div>
        <div className={styles.icons}><a href="https://www.linkedin.com/in/shivam-sharma-6a6bb2285/" target='blank'><LinkedInIcon/></a></div>
        <div className={styles.icons}> <a href="mailto:ShivamSharma98879@gmail.com" target='blank'><MailIcon/></a></div>
    </div>  </div>
    <div className={styles.subparts}>
      <Link to="#Contact Me" smooth style={linkStyle}>  <div> Hire Me</div></Link>
        <div>  
<a 
   href={Resume} 
   download="ShivamSharma.pdf"  
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    DOWNLOAD CV
  </a>
</div>
    </div>
    <div className={styles.box}>
      <div className={styles.boxItem} ><div className={styles.boxNo}>15+</div>
      <div>Verified Skills</div></div>
      <div className={styles.boxItem}><div className={styles.boxNo}>20+</div>
      <div>Professional Projects</div></div>
      <div ><div className={styles.boxNo}>175+</div>
      <div>DSA Problem Soloved</div></div>
    </div>
    </div>

    
    
  <div className={styles.img}>
    <img src={Avatar} alt="avatar" width="100%" /></div>
  </div>
  )
}

export default HeroSection