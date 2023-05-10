import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import AnimationBackground from '../assets/AnimationBackground.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 1rem;
  overflow: hidden;
  background-image: url(${AnimationBackground});
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;

  .motto {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    span {
      font-size: 30px;
      color: red;
      font-weight: bold;
    }
  }
  .Name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 40%;
    /* background-color: red; */
    overflow: hidden;
    span {
      font-size: 80px;
      @media screen and (max-width: 640px) {
        font-size: 40px;
      }
    }
    .circle {
      width: 64px;
      height: 64px;
      border: 4px solid white;
      color: #d6e5fa;
      border-radius: 100%;
      @media screen and (max-width: 640px) {
        width: 30px;
        height: 30px;
        color: #d6e5fa;
      }
    }
  }
`;

function Loader() {
  const Parent = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };
  const letter = {
    initial: {
      y: 50,
      opacity: 0,
      skewY: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] },
    },
  };
  return (
    <Container>
      <motion.div
        animate={{ scale: 60 }}
        transition={{ delay: 5, duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="Name"
      >
        <motion.span animate={{ y: [-70, 0] }}>B</motion.span>
        <motion.span animate={{ y: [-70, 0] }}>L</motion.span>
        <motion.div
          animate={{ x: [-750, 0], rotate: 360 }}
          transition={{ duration: 2 }}
          className="circle"
        ></motion.div>
        <motion.span animate={{ y: [70, 0] }} transition={{ delay: 0.3 }}>
          C
        </motion.span>
        <motion.span animate={{ y: [70, 0] }} transition={{ delay: 0.3 }}>
          K
        </motion.span>
        <motion.span animate={{ y: [70, 0] }} transition={{ delay: 0.3 }}>
          C
        </motion.span>
        <motion.span animate={{ y: [70, 0] }} transition={{ delay: 0.3 }}>
          H
        </motion.span>
        <motion.span animate={{ y: [70, 0] }} transition={{ delay: 0.3 }}>
          A
        </motion.span>
        <motion.span animate={{ y: [70, 0] }} transition={{ delay: 0.3 }}>
          I
        </motion.span>
        <motion.span animate={{ y: [-70, 0] }} transition={{ delay: 0.5 }}>
          N
        </motion.span>
      </motion.div>

      <motion.span
        variants={Parent}
        initial="initial"
        animate="animate"
        className="motto"
      >
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>O</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>O</motion.span>
        <motion.span variants={letter}>U</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>E</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter}>S</motion.span>
      </motion.span>
    </Container>
  );
}


export default Loader;
