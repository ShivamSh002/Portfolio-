import React from 'react'
import styles from "./HeroSection.module.css"
import  Avatar  from '../Assests/file (1).png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Resume from "../Assests/cv.pdf"

const HeroSection = () => {
  return (
    <div className={styles.heroWrapper}><div className={styles.leftWrapper}><h2>Hi I am</h2> 
    <h1>Shivam Sharma</h1>
     <p>FULLSTACK DEVELOPER</p>
     <div className={styles.iconsWrapper}>
        <div className={styles.icons}><GitHubIcon/></div>
        <div className={styles.icons}><LinkedInIcon/></div>
        <div className={styles.icons}><MailIcon/></div>
    </div>  
    <div className={styles.subparts}>
        <div> Hire Me</div>
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