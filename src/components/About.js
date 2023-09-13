import React from 'react';
import { Carousel } from 'antd';
import './About.css';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width:'80%',
};

export const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <div className="slider-containerr">
              <Carousel className="carousel-stylee" autoplay>
                <div>
                  <img src='https://i.postimg.cc/FHt0YdYK/iron-man-ouqxo5w2b59h0042.jpg' style={contentStyle} className='photos' />
                </div>
                <div>
                  <img src='https://i.postimg.cc/FHt0YdYK/iron-man-ouqxo5w2b59h0042.jpg' style={contentStyle} className='photos' />
                </div>
                <div>
                  <img src='https://i.postimg.cc/k4hbqBrq/logan.jpg' style={contentStyle} className='photos' />
                </div>
                <div>
                  <img src='https://i.postimg.cc/y8X3Wfqf/wallpaperflare-com-wallpaper.jpg' style={contentStyle} className='photos' />
                </div>
              </Carousel></div>
    </div>
  )
}
