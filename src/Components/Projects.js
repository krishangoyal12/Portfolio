import React from 'react';
import ProjectBox from './ProjectBox';
import SkillHireImage from '../images/SkillHire.png'
import CoWriteImage from '../images/CoWrite.png';
import EmotiSenseImage from '../images/EmotiSense.png';
import apiwizImage from '../images/apiwiz.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SkillHireImage} projectName="SkillHire" />
        <ProjectBox projectPhoto={CoWriteImage} projectName="CoWrite" />
        <ProjectBox projectPhoto={EmotiSenseImage} projectName="EmotiSense" />
        <ProjectBox projectPhoto={apiwizImage} projectName="apiwiz" />
      </div>

    </div>
  )
}

export default Projects