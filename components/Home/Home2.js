import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "@assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "@styles/style.css"
import Image from "next/image";
import Link from "next/link";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  {"I'm"} a{" "}
  <i>
    <b className="purple">Python Developer & Full-Stack Engineer</b>
  </i>{" "}
  with experience in building scalable backend systems and modern web applications.
  <br /><br />

  I work with{" "}
  <i>
    <b className="purple">APIs, backend systems, and data-driven applications</b>
  </i>{" "}
  and enjoy solving real-world engineering problems.
  <br /><br />

  I have hands-on experience with{" "}
  <i>
    <b className="purple">Django, FastAPI, React.js, Next.js, Python, and Node.js</b>
  </i>{" "}
  and focus on building clean, efficient, and production-ready systems.
  <br /><br />

  I actively practice Data Structures and Algorithms — with over{" "}
  <i>
    <b className="purple">700+</b>
  </i>{" "}
  problems solved on LeetCode, which helps me improve logic and optimization skills.
  <br /><br />

  <i>
    <b className="purple">Tech & Tools:</b>&nbsp;
  </i>
  Python, JavaScript, Django, FastAPI, React.js, Next.js, Node.js, Express.js, MongoDB, SQL, Pandas, Git, System Design.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="avatar-wrapper">
  <Image
    src={myImg}
    alt="avatar"
    className="avatar-img"
    width={200}
    height={200}
  />
</div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <Link
                  href="https://github.com/Divyang022"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.linkedin.com/in/divyang-pandoh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.instagram.com/__divyang_800"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}