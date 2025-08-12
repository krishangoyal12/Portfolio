import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    apiwizDesc : "This website is a lstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages",
    apwizGithub : "https://github.com/krishangoyal12/apiwiz",
    apiwizWebsite : "https://www.npmjs.com/package/apiwiz",

    EmotiSenseDesc : "A real time emotion detector web application that detects human emotions in real-time using your webcam or from uploaded images, powered by face-api.js and Material UI.",
    EmotiSenseGithub : "https://github.com/krishangoyal12/EmotiSense",
    EmotiSenseWebsite : "https://real-time-emotion-detector.netlify.app/",

    CoWriteDesc:"A real-time collaborative document editor, built to enhance team productivity with seamless editing, live cursors, comments, and AI-powered writing assistance.",
    CoWriteGithub:"https://github.com/krishangoyal12/CoWrite",
    CoWriteWebsite:"https://krishan-cowrite.netlify.app",
    
    SkillHireDesc:"A web platform designed to connect clients with short-term and long-term service providers. Made with a vision to provide an opportunity for 20M+ Indians who are able and willing to work but can not find the right path for it.",
    SkillHireGithub:"https://github.com/kalviumcommunity/S84_KrishanGoyal_Capstone_SkillHire",
    SkillHireWebsite:"https://krishan-skillhire.netlify.app/",

    VideoCallAppDesc:"A full-stack, real-time video and audio chat application built with modern web technologies. It allows multiple users to join a room and communicate via peer-to-peer connections, facilitated by a central signaling server.",
    VideoCallAppGithub:"https://github.com/krishangoyal12/Video-Chat-Application",
    VideoCallAppWebsite:"https://krishan-video-call-app.netlify.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox