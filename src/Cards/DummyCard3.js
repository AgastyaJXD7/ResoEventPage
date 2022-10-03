import React from 'react'
import './DummyCard.css'

import resonanzteam from '../soclogos/resonanzteam.jpeg'
import clitchlogo from '../soclogos/clitchlogo.png'
import canvaslogo from '../soclogos/canvaslogo.png'
import junoon from '../soclogos/junoon.png'
import enactuslogo from '../soclogos/enactuslogo.png'
import miragelogo from '../soclogos/miragelogo.jpg'
import creslogo from '../soclogos/creslogo.png'

import ballnight from '../images/ballnight.jpeg'
import resogottalent from '../images/resogottalent.jpeg'
import footloose from '../images/footloose.png'
import jamstream from '../images/jamstream.jpeg'
import bollyframes from '../images/bollyframes.png'
import outofthelamp from '../images/outofthelamp.png'
import planpitching from '../images/planpitching.png'

function DummyCard3() {
  return (
    <div className='Card-Container'>

           <div className='Card'>
              <div className='Description'>
                  <img src={resonanzteam} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>The Resonanz Team</h3>
                      <p>6th Block Terrace</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={ballnight} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSczRjUYatCQlAJiMiQVxZGRIIGvBqadPVAChQZMn7JNW_y0OA/viewform'><button className='Registration-Link'>Register Here!</button></a>
                <p>5:00pm - 7:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={clitchlogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Clitch</h3>
                      <p>Admin</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={resogottalent} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/d/1mR9fgsoBnC4XOnudW0z4TbZM7xOqTXzE8aiMRuqE-uQ/edit?usp=sharing_eil_se_dm&ts=6336dae8'><button className='Registration-Link'>Register Here!</button></a>
                <p>1:00pm - 4:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={miragelogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Mirage-Capella</h3>
                      <p>Main Stage</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={footloose} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href=''><button className='Registration-Link'>Internal</button></a>
                <p>2:00pm - 5:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={creslogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Crescendo</h3>
                      <p>Main Audi/Apj 11</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={jamstream} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1148GczlXEnbcR5Nlbg7zc3aqYyglgDzo8zz8v5-4Npc/edit?usp=sharing_eip_se_dm&ts=6336a702'><button className='Registration-Link'>Register Here!</button></a>
                <p>2:00pm - 6:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img className='white-logos' src={junoon} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>JUNOON</h3>
                      <p>Nescii Lawns</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={bollyframes} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/7/d/1TseVtCE9XY6Yj_PuRtVD0O7GrD1yMwZOXTW2v1A3Jxs/edit?usp=sharing_eil_se_dm&ts=63371349'><button className='Registration-Link'>Register Here!</button></a>
                <p>3:00pm - 5:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={canvaslogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>CANVAS</h3>
                      <p>Amul Ground</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={outofthelamp} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href=''><button className='Registration-Link'>Register Here!</button></a>
                <p>12:00pm - 1:00pm</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img className='white-logos' src={enactuslogo} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>Enactus</h3>
                      <p>Smart Block 4</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={planpitching} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/u/4/d/1xk3ul-NCkahCG3vim59cvZ4EMp3PNE0ihcAQax7Y8dM/edit?usp=sharing_eil_se_dm&ts=63373f77'><button className='Registration-Link'>Register Here!</button></a>
                <p>11:00am - 3:00pm</p>
              </div>
          </div>

    </div>
  )
}

export default DummyCard3