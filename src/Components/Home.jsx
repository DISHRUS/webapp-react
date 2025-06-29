import React from 'react'
import './Home.css';
import SlidingBoxes from './SlidingBoxes.jsx';
import image from './background.webp';
import { FaCar, FaIndustry, FaDraftingCompass, FaCouch, FaTools } from 'react-icons/fa';
import Slider from './Slider.jsx';
import Product from './Product.jsx';
import About from '../Components/About.jsx';



function Home() {
  return (
    <div>
      <Slider/>
       
        <div className="section1">
            <h1>MWT is Highway for your business needs.</h1>
            <p>MWT is a global IT Service providing Company with Technical Powers, Respectfully working for our Clients Business Dreams. We help our clients with Marketing, Design, Develop and Maintaining of Business Processes by Utilizing the technologies.
            </p>
            
        </div>

{/* <div className="animated">
      <div className="bx">Graphics Design</div>
      <div className="bx">Web Application</div>
      <div className="bx">Digital Marketing</div>
      <div className="bx">Business Inteligence</div>
      <div className="bx">Social media manager</div>
    </div> */}
    <div className="section2">
      <h2>Make Big Appearance of Your Business.</h2>
      <p>Our team is assembled in a manner that we have expert’s who do work together to make big appearance of your business</p>
      <SlidingBoxes />
      </div>
      
      <div className="section-wrapper">
      <div className="section4">
      <ul className="industry">
  <li><FaCar className="icone" />Automotive</li>
  <li><FaIndustry className="icone" /> Industries</li>
  <li><FaDraftingCompass className="icone" /> Architects</li>
  <li><FaCouch className="icone" /> Furniture</li>
  <li><FaTools className="icone" /> Manufacturers</li>
</ul>
      </div>
      <div className="section5">
        <div className="image-wrapper">
        <img src={image} className="image"/>
        </div>
      </div>
    </div>
    <div><Product /></div>
    <div className="section6"> hi
    </div>
    <div className='google-card'><About /></div>

    </div>
    
  )
}

export default Home
