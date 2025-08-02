"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import logo from "@assets/logo.png";
import "@styles/style.css";

import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail
} from "react-icons/ai";

export default function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <Image src={logo} alt="brand" width={60} height={60} className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link onClick={() => setExpand(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link onClick={() => setExpand(false)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/resume" passHref legacyBehavior>
                <Nav.Link onClick={() => setExpand(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link onClick={() => setExpand(false)}>
                  <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
