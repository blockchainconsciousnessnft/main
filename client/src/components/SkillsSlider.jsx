import React , {useState , useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import {FaGitAlt , FaReact , FaHtml5 , FaCss3 , FaNodeJs} from 'react-icons/fa'
import JaskeeratSingh from '../assets/JaskeeratSingh.jpg';
import peter from '../assets/peter.jpg'
import john from '../assets/john.png';
import theresa from '../assets/theresa.png';
import divine from '../assets/divine.png';
import joseph from '../assets/joseph.png';
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
          use='A Software Engineer with 1 year experience working at B2B Startup , an Open Source Contributor from last 3 years , mentee in Google Summer Of Code 2022 at Neutralino.Js, a Web3 developer who is constantly learning about the in demand technologies and frameworks. '
          role='Tech Lead'
        />
        <SkillCard
          src={peter}
          name='Ledum Prince Peter'
          use='Designer with creativity, attention to detail, and a desire to use design to achieve both quantifiable corporate goals and user objectives.
          Am also committed to learning new things, their difficulties, and solutions to those difficulties.'
          role='Product Designer'
        />
        <SkillCard
          src={john}
          name='Enyinnaya Freedom'
          use='Enyinnaya Freedom is a freelance creative who specializes in creative writing, poetry, rap music etc. Using the web 3 industry as a sound footing for content autonomy. He specialises in blockchain innovations & community driven initiatives that add value and emphasize cohesion and unison.'
          role='Founder and Ideation Manager'
        />
        <SkillCard
          src={theresa}
          name='Theresa Kennedy'
          use='Founder of Black History DAO - the first decentralized museum built for the preservation of black history on a trustless blockchain. FIBREE | Real Estate Blockchain'
          role='Blockchain Space Expert'
        />
         <SkillCard
          src={joseph}
          name='Joseph Omotade'
          use='A Full Stack Web Developer, a Full Stack Web3 Developer who is really good at writing smart contracts and has built a lot of cool full stack Web3 projects with the best modern UI  '
          role='Smart Contract Developer'
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