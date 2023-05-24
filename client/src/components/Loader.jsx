import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import animatedBackground from '../assets/animatedBackground.jpeg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 1rem;
  overflow: hidden;
  background-image: url(${animatedBackground});
  background-repeat: no-repeat;
  background-size: cover;
  .motto {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    span {
      margin-top: 5px;
      font-size: 30px;
      font-weight: bold;
    }
  }
  .Name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 40%;
    overflow: hidden;
    span {
      font-size: 80px;
      color: yellow;
      font-weight: bold;
      @media screen and (max-width: 640px) {
        font-size: 40px;
        font-weight: bold;
      }
    }
    .circle {
      width: 60px;
      height: 60px;
      border: 4px solid white;
      color: #d6e5fa;
      /* border-radius: 100%; */
      margin-top: 5px;
      @media screen and (max-width: 640px) {
        width: 30px;
        height: 30px;
        color: #d6e5fa;
      }
    }
  }
`

function Loader() {
  
  const Parent = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.3,
        staggerDirection:1,
      },
    },
  }
  const letter = {
    initial: {
      y: 50,
      opacity: 0,
      skewY:100
      
    },
    animate: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {duration:0.5 , ease:[0.17, 0.67, 0.83, 0.67]}
    },
  }
  return (
    <Container>
      <motion.div
        animate={{ scale: 100 }}
        transition={{ delay: 5, duration: 2, ease: [0.17, 0.67, 0.83, 0.67] }}
        className='Name'
      >
        <motion.span animate={{ y: [-70, 0] }}>B</motion.span>
        <motion.span animate={{ y: [-70, 0] }}>L</motion.span>
        <motion.div
          animate={{ x: [-750, 0], rotate: 540 }}
          transition={{ duration: 2 }}
          className='circle'
        ></motion.div>
        <motion.span animate={{ y: [70,0] }} transition={{ delay: 0.3 }}>
          C
        </motion.span>
        <motion.span animate={{ y: [-70,0] }} transition={{ delay: 0.5 }}>
          K
        </motion.span>
        <motion.span animate={{ y: [70,0] }} transition={{ delay: 0.3 }}>
          C
        </motion.span>
        <motion.span animate={{ y: [-70,0] }} transition={{ delay: 0.5 }}>
          H
        </motion.span>
        <motion.span animate={{ y: [70,0] }} transition={{ delay: 0.3 }}>
          A
        </motion.span>
        <motion.span animate={{ y: [-70,0] }} transition={{ delay: 0.5 }}>
          I
        </motion.span>
        <motion.span animate={{ y: [70,0] }} transition={{ delay: 0.3 }}>
          N
        </motion.span>
      </motion.div>

      <motion.span variants={Parent} initial='initial' animate='animate' className='motto'>
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>O</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>O</motion.span>
        <motion.span variants={letter}>U</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>E</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter}>S</motion.span>
        
      </motion.span>
    </Container>
  )
}

export default Loader