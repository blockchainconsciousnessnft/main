import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Image } from 'antd';

const Container = styled.div`
  width: 16vw;
  height: 50vh;
  /* display: flex; */
  margin: 0 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
  background-color: #2c3333;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width:640px) {
    width: 70vw;
    
  }
  @media screen and (max-width:890px) {
    width: 70vw;
    
  }
`
const StyledImage = styled(Image)`
  background-color: #413f42;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  margin-top: 20px;
`
const ImageContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`;

const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 16px;
  gap: 0.5rem;
  flex-direction: column;
  width:100%;
  overflow: hidden;
  .name {
    font-size: 1.5rem;
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
    transition: all 0.8s ease-in-out;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    color: rgba(45,253,79,1);
   
    &:hover {
      color: #fff;
      /* text-decoration: line-through; */
      letter-spacing: 2px;
    }
  }
  .role{
    font-size: 1rem;
    text-align: center;
    color: yellow;
    width: 100%;
  }
  .use {
    font-size: 0.8rem;
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
    transition: all 0.8s ease-in-out;
   
  }
`

function SkillCard({src , name , use, role}) {
const transition = { duration: 1.4, ease: [0.17, 0.67, 0.83, 0.67] }
  return (
    <Container>
      <ImageContainer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
      >
        <StyledImage src={src}/>
      </ImageContainer>

      <Text
        initial={{ y: 20, opacity: 0, skewX: 10 }}
        whileInView={{ y: 0, opacity: 1, skewX: 0 }}
        viewport={{ once: true }}
        transition={{ ...transition, staggerChildren: 0.6 }}
      >
        <motion.p  className='name'>
          {name}
        </motion.p>
        <motion.p className='role'>
          {role}
        </motion.p>
        <motion.p transition={{ delay: 2 }} className='use'>
          {use}
        </motion.p>
      </Text>
    </Container>
  )
}
export default SkillCard