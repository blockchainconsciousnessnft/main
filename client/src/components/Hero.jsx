import React,  {useEffect} from 'react'
import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { Carousel } from "antd";
import heroImage from '../assets/heroImage.png';
import Slider from './Slider';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  overflow: hidden;
  gap: 10rem;
  flex-direction: column;

    @media screen and (max-width: 640px) {
      flex-direction: column;
      gap: 3rem;
    }
   
 
`

const TextPart = styled(motion.div)`
  /* overflow: hidden; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  /* border: 2px solid blue; */
  p {
    overflow: hidden;
  }

  @media screen and (max-width: 640px) {
    width: 90vw;
    margin: 0 auto;
  }
 
  .job {
    overflow: hidden;
    font-size: 120px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 6rem;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: rgba(45,253,79,1);
    @media screen and (max-width: 640px) {
      font-size: 47px;
      line-height: 5rem;
      
    }
    @media screen and (max-width: 450px) {
      font-size: 50px;
      
    }
     @media screen and (max-width:890px) {
      font-size: 90px;
     }
   

    span {
      @media screen and (max-width: 640px) {
        font-size: 80px;
      }
    }
  }

  .brief {
    overflow: hidden;
    font-size: 24px;
    font-weight: 400;
    @media screen and (max-width: 640px) {
      font-size: 20px;
    }
   
  }
  .name {
    font-size: 20px;
    font-weight: 500;
  }
  .arrow {
    position: absolute;
    bottom: 4.8rem;
    right: 8rem;
    width: 100px;
    height: 100px;
    @media screen and (max-width: 640px) {
      bottom: 14rem;
      right: 6rem;
    }
  }
`

//Ease
const transition = { duration: 1.4, ease: [0.17, 0.67, 0.83, 0.67] }

const textParent = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}
const lastText = {
  initial: {
    y: 30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2, ...transition },
  },
}

const letter = {
  initial: {
    y: 400,
    opacity:0,
    skewY:5
  },
  animate: {
    y: 0,
    skewY:0,
    opacity: 1,
    transition: { duration: 1,delay:1, ...transition },
  },
}

function Hero() {

 
  return (
    <Section data-scroll-section>
      <TextPart variants={textParent} initial="initial" animate="animate">
        <motion.p
          variants={letter}
          initial="initial"
          animate="animate"
          className="job"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
        >
          Blockchain Consciousness <span>What is it ?</span>
        </motion.p>
      
      </TextPart>
      <motion.div
        variants={letter}
        initial="initial"
        animate="animate"

        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
      >
        <Slider />
      </motion.div>
    </Section>
  );
}

export default Hero