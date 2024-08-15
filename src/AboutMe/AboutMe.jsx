import React from 'react'
import styles from "./AboutMe.module.css"
import  Avatar  from '../Assests/file (1).png'
import { LuDownload } from "react-icons/lu";
import Resume from "../Assests/cv.pdf"

import Rating from '@mui/material/Rating';



const AboutMe = () => {
  return (
    <div id='About Me' ><p className={styles.heading}>About Me</p>
    
    <div className={styles.wrapper}>
        <div className={styles.avatar}> <img src={Avatar} alt="avatar" width="100%" /></div>
       <div>
        <p className={styles.content}>"Hello everyone, I'm Shivam Sharma, a dedicated and detail-oriented Full Stack Developer with a strong foundation in computer science. Holding a Bachelor's degree in Computer Applications (BCA), I am adept at designing, developing, and deploying robust web applications. With a comprehensive understanding of the software development life cycle, I am passionate about creating innovative solutions.
    <br/><br/>
Currently, I am in the process of completing a fellowship course in Full Stack Development to further hone my skills and stay abreast of the latest industry trends."</p>
<div className={styles.subPart}>
<a 
   href={Resume} 
   download="ShivamSharma.pdf"  
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <LuDownload/> <span>Download CV</span>
  </a>
</div>

</div>

    </div>
     <div className={styles.ratingWrapper}>
      <div>Front-End
     <div>  <Rating sx={{
    "& .MuiRating-iconEmpty": {
      color: "rgba(255, 255, 255, 0.5)", 
    },
  }} name="half-rating" defaultValue={4.5} precision={0.5}  readOnly /></div>
     
      </div>
     <div>Back-End
 
      <div>  <Rating sx={{
    "& .MuiRating-iconEmpty": {
      color: "rgba(255, 255, 255, 0.5)", 
    },
  }}  name="half-rating" defaultValue={3.5} precision={0.5} readOnly /></div>
   
    
     </div>
     <div>Database
   
     <div> <Rating sx={{
    "& .MuiRating-iconEmpty": {
      color: "rgba(255, 255, 255, 0.5)", 
    },
  }}  name="half-rating" defaultValue={3.5} precision={0.5} readOnly /></div>
    
     </div>
     </div>
    </div>
  )
}

export default AboutMe