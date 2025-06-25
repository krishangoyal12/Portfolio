import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import pdf from "../KrishanGoyal.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function previousPage() {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  }

  function nextPage() {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1));
  }

  useEffect(() => {
    const handleResize = () => {
      setwid(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='ResumePage'>
      {/* Added style to move the preview up */}
      <div style={{ marginTop: '-40px' }}>
        <Document 
          file={pdf} 
          className="resumeview"
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page 
            pageNumber={pageNumber} 
            scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} 
          />
        </Document>
      </div>

      {/* Page navigation controls */}
      {numPages && (
        <div className="page-controls">
          <button 
            disabled={pageNumber <= 1} 
            onClick={previousPage}
            className="page-control-btn"
          >
            <BsChevronLeft />
          </button>
          
          <span>
            Page {pageNumber} of {numPages}
          </span>
          
          <button 
            disabled={pageNumber >= numPages} 
            onClick={nextPage}
            className="page-control-btn"
          >
            <BsChevronRight />
          </button>
        </div>
      )}

      <a href={pdf} target='_blank' rel="noreferrer" download="Krishan's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
}

export default Resume;