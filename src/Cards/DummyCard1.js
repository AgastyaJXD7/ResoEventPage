import React from 'react'

import creseve from '../images/creseve.jpeg'
import footloose from '../images/footloose.png'
import fashionparade from '../images/fashionparade.jpeg'
import laughhoes from '../images/laughhoes.png'
import fortuna from '../images/fortuna.png'


import clitchlogo from '../soclogos/clitchlogo.png'
import shakesjeer from '../soclogos/shakesjeer.png'
import creslogo from '../soclogos/creslogo.png'
import feslogo from '../soclogos/feslogo.jpg'

import './DummyCard.css'


function DummyCard1() {
  return (
    <div className='Card-Container'>

         <div className='Card'>
              <div className='Description'>
                  <img src={creslogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Crescendo Eve</h3>
                      <p>Main Audi/Apj 11</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={creseve} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href=''><button className='Registration-Link'>No Registration</button></a>
                <p>11:00am - 6:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={clitchlogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Clitch</h3>
                      <p>Main Stage</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={fashionparade} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSekuQlI7lLkiqD66jV90Holr3p1fcGVaxNHqe6hFp_W27YjIA/viewform'><button className='Registration-Link'>Register Here!</button></a>
                <p>2:45pm - 5:15pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img className='large-logos' src={shakesjeer} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Shakesjeers</h3>
                      <p>Main Stage</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={laughhoes} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1kDfKewDofnNF9hbQ04lbSgsHcw_LfvaWvmaD_LArRoA/edit?usp=sharing_eil_se_dm&ts=63370b28'><button className='Registration-Link'>Register Here!</button></a>
                <p>11:30am - 2:30pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={feslogo} className='white-logos' alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>FES</h3>
                      <p>Smart Block 2</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={fortuna} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1RJJziw7W9hh27P864NXR5qV_ww1HdrnsOJgwiqQga4w/edit?usp=sharing_eil_se_dm&ts=63372df8'><button className='Registration-Link'>Register Here!</button></a>
                <p>11:30am - 2:30pm</p>
              </div>
          </div>

    </div>
  )
}

export default DummyCard1