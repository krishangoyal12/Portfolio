import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode, SiGeeksforgeeks} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Krishan Goyal</h4>
      <h4>Copyright &copy; 2025 KG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/krishangoyal12" target='_blank'><FaGithub/></a> 
        <a href="https://www.linkedin.com/in/krishangoyal717/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:krishangoyal717@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/krishangoyal12/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.geeksforgeeks.org/user/krishangoyal717/" target="_blank"><SiGeeksforgeeks/></a>
      </div>
    </footer>
  )
}

export default Footer
