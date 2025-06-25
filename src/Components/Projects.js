import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="SkillHire" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="CoWrite" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="EmotiSense" />
        <ProjectBox projectPhoto={TindogImage} projectName="apiwiz" />
      </div>

    </div>
  )
}

export default Projects