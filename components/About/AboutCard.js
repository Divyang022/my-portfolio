"use client";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "@styles/style.css";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">Divyang Pandoh</span> from{" "}
            <span className="purple">Jammu, India.</span>
            <br />
            I’m currently working as a Quantitative Analyst at Evalueserve.
            <br />
            I graduated in 2024 with a B.E. in Electrical and Computer Engineering from Thapar University, Patiala.
            <br />
            <br />
            When I’m not working or coding, you’ll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and trying out different cuisines
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Diving into tech blogs or startup stories
            </li>
          </ul>

          <p className="text-center" style={{ color: "rgb(155 126 172)" }}>
            Let’s build something awesome!
          </p>
          <footer className="blockquote-footer text-center">Divyang Pandoh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
