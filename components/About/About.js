import { Container, Row, Col } from "react-bootstrap";
import Particle from "@components/Particle";
import LeetCode from "./LeetCode";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "@assets/about.png";
import Toolstack from "./Toolstack";
import "@styles/style.css";
import Image from "next/image";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="text-center" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">{"I'M"}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Image src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="text-center project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading text-center">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
          
        <h1 className="project-heading text-center">
          <strong className="purple">LeetCode </strong>Profile
        </h1>
        <LeetCode />
      </Container>
    </Container>
  );
}
