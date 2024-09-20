import React from "react";
import "./Projects.css";

import { SiCss3, SiGithub, SiHtml5, SiReact, SiSpringboot} from 'react-icons/si';


import { SiJavascript } from "react-icons/si";

import {SiNodedotjs} from 'react-icons/si';


export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://raw.githubusercontent.com/avi1406/Assets/main/elegentLab_cover.png"
                  alt="Elegent Lab"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Elegent Lab </h2>
              <p>
                A Website designed for Elegent Labs, A Digital Product Agency focused on branding, UI/UX design, mobile, and web development.
                Site is made using React and Libaries used for Top-Notch animation and User experience. 
              </p>
              <div>
                <SiReact />
                <SiNodedotjs/>
                <SiHtml5 />
                <SiJavascript />
                <SiCss3 />
                <SiGithub />
              </div>
              
              <div>
              <a
                  href="https://github.com/avi1406/ElegentLab.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                <a
                  href="https://avi1406.github.io/ElegentLab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See This Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src= "https://raw.githubusercontent.com/avi1406/Assets/main/watchstream.png"
                  alt="Stream Watch"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Watch Stream</h2>
              <p>
                Watch Stream is a Video Streaming SpringBoot based application with Login based authentication. 
                Site is made using SpringBoot, JPA and MySql as Database for user Login and Registration.   
              </p>
              <div>
                <SiSpringboot />
                <SiHtml5 />
                <SiJavascript />
                <SiCss3 />
                <SiGithub />
              </div>
              <div>
                <a
                  href="https://github.com/avi1406/WatchStream/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src= "https://raw.githubusercontent.com/avi1406/Assets/main/portfolio_cover.png"
                  alt="Portfolio website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Portfolio Website </h2>
              <p>
              This is my Portfolio website. It contains everything that I want to showcase about myself. It is made using React, HTML, CSS, JavaScript and hosted using Github.
              </p>
              <div>
                <SiReact />
                <SiNodedotjs/>
                <SiHtml5 />
                <SiJavascript />
                <SiCss3 />
                <SiGithub />
              </div>
              <div>
                <a
                  href="https://github.com/avi1406/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See This Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="exploreButton">

                <a
                  href="https://github.com/avi1406/"
                  target="_blank"
                  rel="noreferrer"
                  >
                  <span type="button" className="btn btn--outline">
                    Explore All Projects
                  </span>
                </a>
          </div>
        
        
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/user-attachments/assets/9053599a-177c-46dd-9cd6-a1b48a206506"
                  alt="Portfolio Website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Portfolio Website</h2>
              <p>
              This is my Portfolio website. It contains everything that i wanted to showcase myself. It is made using React, HTML, CSS, JavaScript and hosted 
              using aws services like S3, Cloudfront, Route53 and Certificate Manager.
              </p>
              <div>
                <FaAws />
                <SiAmazons3 />
                <FaReact />
                <FaHtml5 />
                <FaCss3Alt />
                <SiJavascript />  
              </div>
              <div>
                <a
                  href="https://github.com/nikhil-chourase/my-website.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                <a
                  href="https://master--nikhilchourase.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See This Live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>    */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/user-attachments/assets/2a66a299-97ae-4479-92e7-3be83943cc0f"
                  alt="Fortune Teller"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Clima weather</h2>
              <p>
               It gives info about the weather of current location using APIs, or any desired location entered by the user.

              </p>
              <div>
              <SiFlutter />
                <SiDart />
              </div>
              <div>
                <a
                  href="https://github.com/nikhil-chourase/clima_whether.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                
              </div>
            </div>
          </div>
        </div>     */}
      </div>
    </>
  );
};
