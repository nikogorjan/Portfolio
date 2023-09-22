import React from 'react';
import './Sphere.scss'; // Make sure to import your stylesheet

const Sphere = () => {
  const planes = 12;
  const spokes = 36;

  const renderSpokes = () => {
    const spokeElements = [];

    for (let i = 0; i < planes; i++) {
      for (let j = 0; j < spokes; j++) {
        spokeElements.push(
          <div key={`spoke-${i}-${j}`} className={`spoke spoke-${j}`}>
            <div className="dot"></div>
          </div>
        );
      }
    }

    return spokeElements;
  };

  const renderPlanes = () => {
    const planeElements = [];

    for (let i = 0; i < planes; i++) {
      planeElements.push(
        <div key={`plane-${i}`} className={`plane plane-${i}`}>
          {renderSpokes()}
        </div>
      );
    }

    return planeElements;
  };

  return (
    <div className="main-wrapper">
      <div className="sphere-wrapper">
        {renderPlanes()}
      </div>
      <div className="animista-badge">
        Into CSS animation? <a href="http://animista.net" rel="noopener noreferrer" target="_blank">Check Animista</a>
      </div>
    </div>
  );
};

export default Sphere;