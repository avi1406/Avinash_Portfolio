import React from 'react'
import "./SliderEffect.css";
import { ThemeContext } from "../../Context/theme";
import image1 from '../../Assets/SliderImages/image1.png'
import image2 from '../../Assets/SliderImages/image2.png'
import image3 from '../../Assets/SliderImages/image3.png'
import image4 from '../../Assets/SliderImages/image4.png'
import image5 from '../../Assets/SliderImages/image5.png'
import image6 from '../../Assets/SliderImages/image6.png'
import image7 from '../../Assets/SliderImages/netflix_cover.png'
import image8 from '../../Assets/SliderImages/netflix1.png'


export const SliderEffect = () => {
    const [{ themename }] = React.useContext(ThemeContext);
  
    return (
      <>
        <div className="slider" style= {{"--quantity": "8"}}>
            <div className="list">
                <div className="item" style={{"--position": "1"}}><img src={image1} alt=""/></div>
                <div className="item" style={{"--position": "2"}}><img src={image7} alt=""/></div>
                <div className="item" style={{"--position": "3"}}><img src={image3} alt=""/></div>
                <div className="item" style={{"--position": "4"}}><img src={image4} alt=""/></div>
                <div className="item" style={{"--position": "5"}}><img src={image5} alt=""/></div>
                <div className="item" style={{"--position": "6"}}><img src={image6} alt=""/></div>
                <div className="item" style={{"--position": "7"}}><img src={image2} alt=""/></div>
                <div className="item" style={{"--position": "8"}}><img src={image8} alt=""/></div>
                
            </div>
        </div>
        <div className="slider" reverse = "true" style= {{"--quantity": "8"}}>
            <div className="list">
                <div className="item" style={{"--position": "1"}}><img src={image1} alt=""/></div>
                <div className="item" style={{"--position": "2"}}><img src={image7} alt=""/></div>
                <div className="item" style={{"--position": "3"}}><img src={image3} alt=""/></div>
                <div className="item" style={{"--position": "4"}}><img src={image4} alt=""/></div>
                <div className="item" style={{"--position": "5"}}><img src={image5} alt=""/></div>
                <div className="item" style={{"--position": "6"}}><img src={image6} alt=""/></div>
                <div className="item" style={{"--position": "7"}}><img src={image2} alt=""/></div>
                <div className="item" style={{"--position": "8"}}><img src={image8} alt=""/></div>
                
            </div>
        </div>
        
      </>
    );
  };
