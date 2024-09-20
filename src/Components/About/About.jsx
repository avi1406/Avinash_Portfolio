import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { BsInstagram } from "react-icons/bs";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { SliderEffect } from "./SliderEffect";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="h1e">
           Hi, I am <span className="about__name">Avinash Singh</span>
                   <span className="short-text"> Avi</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        A Computer Science Graduate who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product. Highly inclined towards ideation and innovation. Discovering real life problems and proposing solutions to them is what I aspire for.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/avi1406?tab=repositories"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:singhavi0601@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919654960796"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.instagram.com/__avinashh.__/"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
            className="link link--icon"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-singh0601/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <SliderEffect/>
      <section id="#skills">
        <Techstacks />
      </section>
      
    </>
  );
};
