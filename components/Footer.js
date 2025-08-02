import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "@styles/style.css";
import Link from "next/link";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Divyang Pandoh using Next.js</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <Link
                href="https://github.com/Divyang022"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </Link>
            </li>
          
            <li className="social-icons">
              <Link
                href="https://www.linkedin.com/in/divyang-pandoh-727a56201/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                href="https://www.instagram.com/__divyang_800"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}