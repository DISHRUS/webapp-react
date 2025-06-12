import React from "react";
import "./Product.css";
import IT from './IT.png';


const images = ["/img1", "/img2", "/img3.png", "/img4.png", "/img5.png", "/img6.png"];

const angleStep = (2 * Math.PI) / images.length;

export default function Product() {
  return (
    <div className="gallery-container">
      <div className="central-image">
        <img src={IT} alt="Center" />
      </div>

      <div className="orbit-container">
        {images.map((src, index) => {
          const angle = index * angleStep;
          const x = 150 * Math.cos(angle);
          const z = 150 * Math.sin(angle);

          return (
            <div
              key={index}
              className="card"
              style={{
                transform: `rotateY(${(angle * 180) / Math.PI}deg) translateZ(300px) translateX(${x}px) translateZ(${z}px)`
              }}
            >
              <img src={src} alt={`card-${index}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
