import React from 'react'
import { styled } from 'styled-components'

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


const Projects = () => {
  return (
    <ProjectsDiv>
      <h1>Blockchain consciousness goal is to: </h1>
      <h2>Preach, Exemplify and Exhibit</h2>
    </ProjectsDiv>
  )
}

export default Projects