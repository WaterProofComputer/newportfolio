import React, { useState, useEffect } from 'react';
import './projektit.scss';

const Projektit = () => {
  const [current, setCurrent] = useState(0);
  const projects = [
    {
      image: 'wizardtower.png',
      info: 'Wizard Tower: 2D Peliprojekti, ei valmis.',
      url: '',
    },
    {
      image: 'maalaus.jpg',
      info: 'Kotkantien maalaus ja tapetointi: Maalaus sivustot.',
      url: 'https://geronimo.okol.org/~lesvil/maalaus/',
    },
    {
      image: 'maalaus.png',
      info: 'AutoHeaven: Nettisivut auto yritykselle.',
      url: '',
    },
    {
      image: 'logo512.png',
      info: 'Project 4: Description for project 4.',
      url: '',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div id='galleriamain'>
      <div className="galleria">
        <a
          href={projects[current].url}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-item"
        >
          <img
            src={projects[current].image}
            alt={`Gallery Image ${current + 1}`}
            style={{
              width: '400px',
              height: '400px',
              transition: 'opacity 0.5s ease-in-out',
              objectFit: 'cover',
            }}
          />
          <div className="project-info">{projects[current].info}</div>
        </a>
      </div>
    </div>
  );
};

export default Projektit;
