import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle"; // Optional, if not needed you can remove
import { AiOutlineDownload } from "react-icons/ai";
import "@styles/style.css"; // Ensure this path is correct

export default function ResumeNew() {
  const googleDrivePreviewLink =
    "https://drive.google.com/file/d/113aeEpbT-M5xDTQKMSutYDHU3X0Xavcl/preview";

  const googleDriveDownloadLink =
    "https://drive.google.com/uc?export=download&id=113aeEpbT-M5xDTQKMSutYDHU3X0Xavcl";

  return (
    <Container fluid className="resume-section">
      <Particle />
      <br></br>

      {/* Top Download Button */}
      <Row style={{ justifyContent: "center", marginBottom: "20px", zIndex: 2 }}>
        <Button
          variant="primary"
          href={googleDriveDownloadLink}
          target="_blank"
          style={{ maxWidth: "250px", position: "relative", zIndex: 2 }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* Resume Preview */}
      <Row className="resume justify-content-center">
        <div className="resumeContainer">
          <iframe
            src={googleDrivePreviewLink}
            width="100%"
            height="1000px"
            style={{ border: "none", position: "relative", zIndex: 1 }}
            allow="autoplay"
            title="Resume Preview"
          ></iframe>
        </div>
      </Row>

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", marginTop: "20px", zIndex: 2 }}>
        <Button
          variant="primary"
          href={googleDriveDownloadLink}
          target="_blank"
          style={{ maxWidth: "250px", position: "relative", zIndex: 2 }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}
