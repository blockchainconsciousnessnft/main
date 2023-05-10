import React , {useState , useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import {FaGitAlt , FaReact , FaHtml5 , FaCss3 , FaNodeJs} from 'react-icons/fa'
import JaskeeratSingh from '../assets/JaskeeratSingh.jpg';
import {
  SiJavascript,
  SiFirebase,
  SiStyledcomponents,
  SiTailwindcss,
  SiFramer,
} from 'react-icons/si'
import styled from 'styled-components'
import SkillCard from '../shared/SkillCard'

function SkillsSlider() {
  return (

    <Section>
      <Marquee
        style={{ margin: '0 1rem' }}
        pauseOnHover={true}
        speed={100}
        gradient={false}
      >
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
        <SkillCard
          src={JaskeeratSingh}
          name='Jaskeerat Singh'
          use=' I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment I mainly use this for source control managment'
        />
      </Marquee>
    </Section>
  )
}

const Section = styled.div`
    /* background-color: green; */
    margin-top: 5rem;
    width: 90vw;
    overflow: hidden;
    @media screen and (max-width:640px) {
      width: 90vw;
      
    }
   

    
`

export default SkillsSlider