import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import my_photo from '../../Assets/images/my-photo-port.jpeg'


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={my_photo}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Avinash Singh </span>, Currently working in 
                <span className="different"> Lifestyle International Pvt. Ltd.</span> and I have
                completed my  B.Tech in Computer Science from 
                Indian Institute Of Information Technology, Tiruchirappalli.
              </h4>
              <h4 className="codingProf">
                Coding Profiles:{" "}
                <span className="different profiles"><a href="https://leetcode.com/u/singhavi0601/" target="_blank" rel="noreferrer"><u>Leetcode</u></a></span>  {"  "}
                <span className="different profiles"><a href="https://www.geeksforgeeks.org/user/avinashsingh0614/" target="_blank" rel="noreferrer"><u>GeeksforGeeks</u></a></span> {"  "} 
                <span className="different profiles"><a href="https://www.hackerrank.com/profile/avi1406" target="_blank" rel="noreferrer"><u>HackerRank</u></a></span>  {"  "}
              </h4>

              <h4>
                Some of my interests apart from Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Martial Arts {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning new skills{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Art and Painting{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Guitar{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
