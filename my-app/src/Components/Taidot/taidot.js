import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import './taidot.scss';
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function Taidot() {
  return (
    <div id='maincenter'>
    <h1 id='taidot'>Taidot</h1>
    <section id="center">
      <div className="rivi">
      <div className="box-50">
      <div id='center2'>
      <div id='ohjkielet'>
      <div className='taidot-grid'>
      <div className='taitobox'>
      <FaSass style={{ color: '#ce679a' }}className='taidot'/>
      </div>
      <div className='taitobox'>
      <FaCss3Alt style={{ color: '#2299f8' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <FaReact style={{ color: '#61dbfb' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <FaHtml5 style={{ color: '#f16529' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <IoLogoJavascript style={{ color: '#ffdf00' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <SiCsharp style={{ color: '9b4993' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <FaGithub style={{ color: '#8030a3' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <FaPhp style={{ color: '#AEB2D5' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <SiMysql style={{ color: '#01556f' }} className='taidot' />
      </div>
      <div className='taitobox'>
      <FaPython style={{ color: '#4B8BBE' }} className='taidot' />
      </div>
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