import React, { useEffect } from 'react';
import './main.css';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'

export default function Main() {
  useEffect(() => {
    const mainTitle = document.querySelector('.main');
    const subTitle = document.querySelector('.mains');
    const Image = document.querySelector('.img');


    gsap.fromTo(mainTitle, { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(subTitle, { opacity: 0, delay: 0.5 }, { opacity: 1, duration: 3 }); // Add a slight delay for sub-title
    
  }, []);

 
  useGSAP(() => {
    gsap.from(".mains",{
      y:300,
      opacity:0,
     
      duration:2,
      delay:1
    })

  })

  useGSAP(() => {
    gsap.from('.main',{
      y:300,
      opacity:0,
      
      duration:2,
      delay:1
    })
  })

  return (
    <div>

      <div className="imageGallary">
        {/* <img src="https://scontent.fmey2-1.fna.fbcdn.net/v/t39.30808-6/428688299_1438460390074796_3043100674254529561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m7KnP832sJAQ7kNvgFJApM-&_nc_ht=scontent.fmey2-1.fna&oh=00_AYAb1EAZdRGXEWV6NRQskW7ZIlrdQh5igKZOGeJsXNzugg&oe=6652B2A0" className='img'  alt="" /> */}
      </div>
      <div className="deteiling">
        <h1 className="main">Welcome to Chandan Page...</h1>
        <h2 className="mains">This is the first React GSAP page</h2>
      </div>
    </div>
  );
}
