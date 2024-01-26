import React, { useState, useEffect } from 'react';
import './header.scss';
import './bubbles.scss'



function App() {
  const [text, setText] = useState('');
  const texts = ['Ohjelmistokehittäjä', 'Fullstack Developer'];
  const speed = 50;
  const appearTime = 1000;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let currentTextIndex = 0;
    let charIndex = 0;
    let erase = false;

    const animateText = () => {
      const currentText = texts[currentTextIndex % texts.length];

      if (!erase) {
        if (charIndex < currentText.length) {
          setText(currentText.substring(0, charIndex + 1));
          charIndex++;
          setTimeout(animateText, speed);
        } else {
          erase = true;
          setTimeout(animateText, appearTime);
        }
      } else {
        if (charIndex > 0) {
          setText(currentText.substring(0, charIndex - 1));
          charIndex--;
          setTimeout(animateText, speed);
        } else {
          erase = false;
          currentTextIndex++;
          setTimeout(animateText, 0); // Start typing the next text immediately
        }
      }
    };

    animateText();
  }, []);

  return (
    <div className="App">
    <body>
        <div className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#tietoaminusta">Tietoa Minusta</a></li>
        <li><a href="#koulu">Koulutus</a></li>
        <li><a href="#taidot">Taidot</a></li>
        <li><a href="#projektit">Projektit</a></li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
        </div>
    <div id="alku">
    <header>
    <div className="content">
    <div className="bubbles">
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    </div>
    <div className="wrapper">
    <h4>Viljami Leskelä</h4>
        <p>ㅤ</p>
        <div className="" id="headertext">{text}</div>
    </div>
    </div>
    </header>
    </div>
    </body>
    </div>
    );
}