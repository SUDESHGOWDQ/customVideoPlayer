import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import "./index.css";

const PdfComponent = ({ Url }) => {
  return (
    <div className="pdf-container">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={Url} />
      </Worker>
    </div>
  );
};

export default PdfComponent;
