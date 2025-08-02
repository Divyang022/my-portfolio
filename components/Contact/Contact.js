import contactImg from "@assets/contact.png";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "@components/Particle";
import ContactForm from "./Form"; // Import the client component
import "@styles/style.css";

export default function Contact() {
  return (
    <Container fluid className="about-section">
    
      <Container>
        <Row className="align-items-center justify-content-center" style={{ marginTop: "0.5rem" }}>

          <Col md={6}>
            <div style={{ padding: "2rem", marginTop: "-60px" }}>
              <h1 className="mb-3">
                Get in <span className="purple">Touch</span>
              </h1>
              <h2 className="mb-4">
                <span className="purple">Contact</span> Me
              </h2>
              <ContactForm />
            </div>
          </Col>

          <Col md={6} className="text-center">
            <Image
              src={contactImg}
              alt="Contact illustration"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
        <Particle />
    </Container>
  );
}
