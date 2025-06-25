import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../KrishanGoyal.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Use CDN for worker
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwid(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>
      <a href={pdf} target='_blank' download="Krishan's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  )
}

export default Resume