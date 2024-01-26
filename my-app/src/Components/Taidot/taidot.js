import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';

function Taidot() {
  return (
    <div id='maincenter'>
    <h1 id='taidot'>Taidot</h1>
    <section id="center">
      <div className="rivi">
      <div className="box-50">
      <div id='center2'>
      <div id='ohjkielet'>
      <p>HTML</p>
      <div className="progress-bar">
      <div className="HTML">80%</div>
      </div>
      <p>CSS</p>
      <div className="progress-bar">
      <div className="CSS">80%</div>
      </div>
      <p>C#</p>
      <div className="progress-bar">
      <div className="Csharp">75%</div>
      </div>
      <p>JAVASCRIPT</p>
      <div className="progress-bar">
      <div className="JAVASCRIPT">60%</div>
      </div>
      <p>PHP</p>
      <div className="progress-bar">
      <div className="PHP">60%</div>
      </div>
      <p>MYSQL</p>
      <div className="progress-bar">
      <div className="MYSQL">60%</div>
      </div>
      <p>PYTHON</p>
      <div className="progress-bar">
      <div className="PYTHON">80%</div>
      </div>
      </div>
      </div>
      </div>
      <div className="box-50">  
      <div id='center2'>
      <div id='kielet'>
      <p>Suomi</p>
      <CircularProgress
      sx={{'--CircularProgress-size': '14vw',
      color: 'var(--joy-palette-primary-500, #FFFF)',
      '--CircularProgress-trackColor': '#ccc',
      '--CircularProgress-progressColor': 'rgb(17, 144, 148)'}}
      thickness={10}
      determinate
      value={100}
      >100%</CircularProgress>
      </div>
      <div id='kielet'>
      <p>Englanti</p>
      <CircularProgress
      sx={{'--CircularProgress-size': '14vw',
      color: 'var(--joy-palette-primary-500, #FFFF)',
      '--CircularProgress-trackColor': '#ccc',
      '--CircularProgress-progressColor': 'rgb(17, 144, 148)'}}
      thickness={10}
      determinate
      value={85}
      >85%</CircularProgress>
      </div>
      <div id='kielet'>
      <p>Ruotsi</p>
      <CircularProgress
      sx={{'--CircularProgress-size': '14vw',
      color: 'var(--joy-palette-primary-500, #FFFF)',
      '--CircularProgress-trackColor': '#ccc',
      '--CircularProgress-progressColor': 'rgb(17, 144, 148)'}}
      thickness={10}
      determinate
      value={20}
      >20%</CircularProgress>
      </div>
      </div>
      </div>
      </div>
    </section>
    </div>
  );
}

export default Taidot;