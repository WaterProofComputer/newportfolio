import React, { useState, useEffect } from 'react';
import './projektit.scss';

const Projektit = () => {
  const [current, setCurrent] = useState(0);
  const projects = [
    {
      image: 'Wizardtower.png',
      info: 'Wizard Tower: 2D Peliprojekti, ei valmis.',
      url: 'https://github.com/WaterProofComputer',
    },
    {
      image: 'maalaus.jpg',
      info: 'Kotkantien maalaus ja tapetointi: Maalaus sivustot.',
      url: 'https://geronimo.okol.org/~lesvil/maalaus/',
    },
    {
      image: 'autoheaven.png',
      info: 'AutoHeaven: Nettisivut auto yritykselle.',
      url: 'https://autoheavenwebsiteproject-4mobj.kinsta.page',
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
      <h1>Projektit</h1>
      <div className="galleria">
        <a
          href={projects[current].url}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-item"
        >
          <img className='projektikuva'
            src={projects[current].image}
            alt={`Gallery Image ${current + 1}`}
            style={{
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
