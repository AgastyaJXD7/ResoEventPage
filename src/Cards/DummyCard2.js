import React from 'react'

import ashwamedh from '../soclogos/ashwamedh.png'
import shakesjeer from '../soclogos/shakesjeer.png'
import debsoclogo from '../soclogos/debsoclogo.jpg'
import creslogo from '../soclogos/creslogo.png'
import intaglios from '../soclogos/intaglios.PNG'


import mrmsreso from '../images/mrmsreso.jpeg'
import spoton from '../images/spoton.jpeg'
import nautanki from '../images/nautanki.jpeg'
import duelofwords from '../images/duelofwords.png'
import kalesh from '../images/kalesh.png'


import './DummyCard.css'

function DummyCard2() {
  return (
      <div className='Card-Container'>       
            

          <div className='Card'>
              <div className='Description'>
                  <img src={intaglios} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Intaglios</h3>
                      <p>Main Stage</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={mrmsreso} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1U6t75TJ35cLRqkFRdNnkPJyVXarwnPZ_dQeQqLyTs9w/edit?usp=sharing_eil_se_dm&ts=6335b0a0'><button className='Registration-Link'>Register Here!</button></a>
                <p>1:00pm - 5:00pm</p>
              </div>
          </div>       

          <div className='Card'>
              <div className='Description'>
                  <img className='large-logos' src={shakesjeer} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Shakesjeers</h3>
                      <p>Admin</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={spoton} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1avta-l8lXFGWGNap8R4UoydDw9cliu-QbwmVPVZfbcY/edit?usp=sharing_eip_se_dm&ts=6336c4cb'><button className='Registration-Link'>Register Here!</button></a>
                <p>2:30pm - 5:30pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={ashwamedh} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Ashwamedh</h3>
                      <p>Main Audi/Apj 11</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={nautanki} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeHhhkscrgh9VucP6Q1vlHimTvsMULAgQYa4Sf0OrjDdvIANQ/viewform'><button className='Registration-Link'>Register Here!</button></a>
                <p>11:00am - 6:00pm</p>
              </div>
          </div>
    
          <div className='Card'>
              <div className='Description'>
                  <img src={debsoclogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>DebSoc</h3>
                      <p>Smart Block 2</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={duelofwords} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1v11-pJET8aUIVAJGyVZlLESZVv5UDXmOdyawBFRDX_s/edit?usp=sharing_eil_se_dm&ts=6337145f'><button className='Registration-Link'>Register Here!</button></a>
                <p>12:00pm - 2:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={creslogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Crescendo</h3>
                      <p>Admin</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={kalesh} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1CPK2KYSdypC9oBiXOpgPlZRSiVpGzKi5PgRdvnlcDXA/edit?usp=sharing_eil_se_dm&ts=633722f6'><button className='Registration-Link'>Register Here!</button></a>
                <p>11am - 2pm</p>
              </div>
          </div>

        

      </div>
  )
}

export default DummyCard2