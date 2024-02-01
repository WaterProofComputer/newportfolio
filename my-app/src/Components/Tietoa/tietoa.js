import React from 'react';
import './tietoa.scss';
function Tietoa() {
  return (
    <div id='maincenter'>
    <h1 id='tietoaminusta'>Tietoa Minusta</h1>
    <section id="center">
    <div className="rivi">
        <div className="box-50">
        <p className='tietoateksti'>Minä olen Viljami Leskelä vuonna 2006 syntynyt toisen vuoden tieto- ja viestintätekniikan opiskelija OSAO:lla.
        Olen innokas ja motivoitunut ohjelmistokehittäjä, olen opiskellut ja harjoitellut ohjelmointia kielillä kuten HTML, CSS, Javascript, PHP, MySQL, Python ja C#.
        Harrastan miekkailua ja kuntosalilla käymistä. Vapaa-ajalla tehnyt pieniä projekteja unityllä ja työskentelen tällä hetkellä godotti peliprojektin parissa.</p>
        </div>
        <div className="box-50">
        <img className="minä" src="./omakuva.jpg"></img>
        </div>
    </div>
    </section>
    </div>
  );
}

export default Tietoa;