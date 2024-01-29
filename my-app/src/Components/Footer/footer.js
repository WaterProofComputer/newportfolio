import React from 'react';
import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className='box-30'>
        <p>Linkit</p>
        <a className='footerlinkit' href="#tietoaminusta">Tietoa Minusta</a>
        <a className='footerlinkit' href="#koulu">Koulutus</a>
        <a className='footerlinkit' href="#taidot">Taidot</a>
        <a className='footerlinkit' href="#galleriamain">Projektit</a>
      </div>
      <div className='box-30'>
        <p>Sosiaalinen Media</p>
      </div>
      <div className='box-30'>
        <p>Kontaktit</p>
      </div>
    </footer>
  );
}

export default Footer;