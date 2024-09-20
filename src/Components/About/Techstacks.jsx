import React from "react";
import "./Techstacks.css";

import { SiReact, SiSpringboot } from "react-icons/si";
import {SiNodedotjs} from 'react-icons/si';
import { SiCplusplus } from "react-icons/si";
import {SiJava} from 'react-icons/si';
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import {SiFigma} from 'react-icons/si';
import {SiCanva} from 'react-icons/si';
import { SiBootstrap } from "react-icons/si";



export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Tech Stack</h2>
        <div className="techsection">
          <div>
            <SiSpringboot />
            <h5>Spring Boot</h5>
          </div>
          <div>
            <SiReact />
            <h5>React</h5>
          </div>

          <div>
            <SiNodedotjs />
            <h5>Node.js</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <SiJava />
            <h5>Java</h5>
          </div>
          
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>


          <div>
            <FaPython />
            <h5>Python</h5>
          </div>
          <div>
            <FaHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <FaCss3Alt />
            <h5>CSS</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>

          <div>
            <SiOracle />
            <h5>Oracle DB</h5>
          </div>
          <div>
            <FaGitAlt />
            <h5>Git</h5>
          </div>
          <div>
            <FaGithub />
            <h5>Github</h5>
          </div>

          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>

         
          <div>
            <SiFigma />
            <h5>Figma</h5>
          </div>

          <div>
            <SiCanva />
            <h5>Canva</h5>
          </div>

          <div>
            <SiBootstrap />
            <h5>BootStrap</h5>
          </div>

          
        </div>
      </div>
    </>
  );
};
