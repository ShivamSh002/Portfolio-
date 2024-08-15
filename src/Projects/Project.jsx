import React from 'react'
import styles from "./Project.module.css"
import SwiperGrid from './Swiper';

const Project = () => {
  return (
    <div className={styles.projectWrapper} id='Projects'><p className={styles.heading}>Projects</p>
    <div >
    <div>   <SwiperGrid/></div>
    </div>
    </div>
  )
}

export default Project