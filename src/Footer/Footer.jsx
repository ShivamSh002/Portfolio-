import React from 'react'
import Typography from '@mui/material/Typography';
import styles from "./Footer.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import {HashLink as Link} from "react-router-hash-link"
import { SiLetterboxd } from "react-icons/si";
import Box from '@mui/material/Box';


const linkStyle = { color: "white", textDecoration: 'none' };



const Footer = () => {
  const footerTabs= ["Home","Skills","About Me","Projects","Contact Me"]
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.logoWrappper}>
       <Typography
    variant="h1"
    component="a"
    sx={{
      fontFamily: 'monospace',
      display: { xs: 'none', md: 'block' },
      fontWeight: 900,
      letterSpacing: '.3rem',
      textDecoration: 'none',
     
    }}
    className={styles.logo}
  >
     <SiLetterboxd
         style={{
         fontSize: 'inherit',
         fill: 'url(#gradient)',
        }}
       />
  <svg width="0" height="0">
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#FF4500', stopOpacity: 1 }} />
    </linearGradient>
  </svg>
  </Typography>
  

  <Typography
          
          variant="h1"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: 'block', md: 'none' } ,
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color:"white",
            textDecoration: 'none',
           
          }}
   
        >
         <SiLetterboxd />
        </Typography>
  </div>

  <div className={styles.wrapper}>

    {footerTabs.map((item,idx)=><Link to={`#${item}`} smooth style={linkStyle}><div className={styles.child} key = {idx} >{item}</div></Link>)}
  </div>
  <div className={styles.iconsWrapper}>
        <div className={styles.icons}><a href="https://github.com/ShivamSh002" target='blank'><GitHubIcon/></a></div>
        <div className={styles.icons}><a href="https://www.linkedin.com/in/shivam-sharma-6a6bb2285/" target='blank'><LinkedInIcon/></a></div>
        <div className={styles.icons}><a href="mailto:ShivamSharma98879@gmail.com" target='blank'><MailIcon/></a></div>
    </div> 

    <div className={styles.childWrapper}>
    <div>

    <a href="mailto:ShivamSharma98879@gmail.com"> <div className={styles.childWrapper2}><div><CiMail  /> </div> <div>ShivamSharma98879@gmail.com</div></div></a>
    </div>
      <div><a href="tel:+919310198879"><div className={styles.childWrapper2}><div><BsTelephone /></div> <div>+91 9310198879</div></div></a>
      </div>
    </div>
    <hr/>
    <div className={styles.credit}>Desgined By Shivam Sharma</div>
  </div>
  )
}

export default Footer