import React from 'react'
import './DummyCard.css'

import resonanzteam from '../soclogos/resonanzteam.jpeg'

import lantern from '../images/lantern.jpeg'
import resoreelchallange from'../images/resoreelchallange.png'

function DummyCard0() {
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
                  <img src={lantern} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <button className='Registration-Link' href=''>No Registration</button>
                <p>To Be Declared</p>
              </div>
          </div>

          <div className='Card'>
              <div className='Description'>
                  <img src={resonanzteam} alt='' style={{ height: "40px", width: "40px", }} />
                  <div className='Description-Text'>
                      <h3>The Resonanz Team</h3>
                      <p>Main Campus</p>
                  </div>
              </div>

              <div className='Poster_Container'>
                  <img src={resoreelchallange} alt='' style={{ height: "240px", width: "100%" }} />
              </div>

              <div className='Footer-Part'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSezaZypVY-bz6LiN3cUlUuBL4BXTRWnGVczniwhqy9T0Y6ePQ/viewform'><button className='Registration-Link' href=''>Register Here</button></a>
                <p>To Be Declared</p>
              </div>
          </div>

    </div>
  )
}

export default DummyCard0