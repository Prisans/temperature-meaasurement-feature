import React from 'react'
import './Assignment.css'
import {AiOutlinePlusSquare} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"
import {BsToggle2Off} from "react-icons/bs"
import {CiLocationArrow1} from "react-icons/ci"
import {WiDegrees} from "react-icons/wi"
import {BsSun} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {BsArrowDownShort} from "react-icons/bs"
import {BsArrowRightShort} from "react-icons/bs"
import {WiHumidity} from "react-icons/wi"
import {BsWind} from "react-icons/bs"
import {FiCloudRain} from "react-icons/fi"
import {BsThermometerHalf} from "react-icons/bs"
import {BsCloudLightningFill} from "react-icons/bs"
import speed from './speed.png'
import Chart from './Chart'


const Assignment = () => {
  return (
    <div className="container">
        <div className="wheater-container">
      <AiOutlinePlusSquare className='add-btn button' />

      <BsThreeDots className='page-btn button' />

      <BsToggle2Off className='toggle-btn button' />

      {/* Address start-----------------> */}


      <div className="address-container">

        {/* location---------------------- */}

      <div className="location">
        <CiLocationArrow1 className='location-btn button' />
        <p className='location' >NEW YORK, USA</p>
        <p className='date' >Today 13 August</p>
      </div>


      {/* time------------------------ */}


      <div className="time">
        <p className='time-txt'>7:13</p>
        <p className='time-txt'>7:14</p>
      </div>

     {/* address end------------------- */}
   

      <div className="content">
      <h1>27<WiDegrees className='deg-btn' /></h1>

      <div className="sunny">
        <BsSun className='sun-btn' /><p className='sunny-txt' >sunny</p>
      </div>
      </div>

      </div>

      {/* ================================================ */}

        <div className="data-container">

        {/* 1st coln------------------------------- */}

        <div className="profile-container">

          <div className="profile-content">
            <h3>Welcome back Ishabella</h3>
            <p>Check out today's weather information</p>
          </div>


          <div className="profile-photo">
          <BsThreeDots className='dot-btn  button'/>
          <CgProfile className='pro-btn button'/>
          </div>

        </div>

        {/* 1st coln end--------------------------------- */}


      {/* chart start------------------------------------- */}

        <div className="chart">

          <div className="upcoming-data">

            <p>Upcoming hours</p>

            <div className="updata-btn">
            <button className='rain-btn' >Rain Precipitaion <BsArrowDownShort/> </button>
            <button className='next-btn' >Next <BsArrowRightShort/> </button>

            </div>
          </div>
        <Chart/>
        </div>


      {/* chart end------------------------------------ */}



      <div className="cards-content">
        <p>Here , more about today's weather</p>

      <div className="card-container">


      <div className="upper-card">

          {/* ========================================================== */}

          <div className="card card-one">

            <div className="card-one-content">
            <div className="humidity">
            <p>Humidity</p>
            <WiHumidity className='card-btn' />
            </div>

            <div className="humi-txt"><p>82% bad</p></div>

           <div className="humi-span">

            <div className="humi-span-txt">
              <span>good</span>
              <span>normal</span>
              <span>bad</span>
            </div>

           <div className="humi-span-diagram">
           <span></span>
            <span></span>
            <span id='span1-3'><li></li></span>
           </div>

           </div>
            </div>

          </div>

          {/* ================================================== */}

          <div className="card card-two">

        <div className="card-two-content">

          <div className="speedometer">
            <p>wind</p>
            <BsWind className='card-btn' />
          </div>

          <div className="speed-content">
          <img src={speed} alt="pic" className='speed-pic' />
          <p>80km/hr</p>
          </div>
        </div>

          </div>





          {/* ============================================================== */}
          <div className="card card-three">

        <div className="card-three-content common">
          <p>precipitation</p>
          <FiCloudRain className='card-btn' />
        </div>

        <div className="preci-content common-content ">
          <p>1.4cm</p>
        </div>

        <div className="preci-span">

        <div className="preci-span-txt common-txt ">
          <span>0</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>40</span>
          <span>50</span>
          <span>60</span>
          <span>70</span>
          <span>80</span>
          <span>90</span>
         
        </div>

        <div className="preci-span-diagram common-diagram">
          <span className='same-color' ></span>
          <span className='same-color' ></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        </div>

          </div>






          {/* ===================================================================== */}
        </div>
{/* =================================upper card end============================================ */}

        <div className="lower-card">

        {/* ======================================================================================== */}

          <div className="card card-four">

              <div className="card-four-content common">
                <p>UV index</p>
                <BsSun className='card-btn' />
              </div>

              <div className="uv-content common-content ">
                <p>5 medium</p>
              </div>


            <div className="uv-span">

             <div className="uv-span-txt common-txt">
              <span>0-2</span>
              <span>3-5</span>
              <span>6-7</span>
              <span>8-10</span>
              <span>11+</span>
             </div>

             <div className="uv-span-diagram common-diagram ">
              <span className='uv-span-dia' ></span>
              <span className='uv-span-dia' ></span>
              <span></span>
              <span></span>
              <span></span>
             </div>


            </div>

          </div>

          {/* =========================================================================================== */}


          
          <div className="card card-five">
          <div className="card-five-content common">
                <p>Feels like</p>
                <BsThermometerHalf className='card-btn' />
              </div>

              <div className="feel-content common-content ">
                <p>36</p>
              </div>

            <div className="feel-span">

            <div className="feel-span-txt common-txt ">
              <span>0</span>
              <span>25</span>
              <span>50</span>
            </div>

            <div className="feel-span-diagram common-diagram">
              <span>
                <li></li>
              </span>
            </div>


            </div>


          </div>


        {/* ======================================================================================= */}



          <div className="card card-six">

          <div className="card-six-content common">
                <p>Chance of Rain</p>
                <BsCloudLightningFill className='card-btn' />
              </div>

              <div className="rain-content common-content ">
                <p>74%</p>
              </div>

              <div className="rain-span">

                <div className="rain-span-txt common-txt ">

                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>

                </div>

              <div className="rain-span-diagram common-diagram">
                <span><li></li></span>
              </div>

              </div>

          </div>


          {/* ========================================================================================== */}


          
        </div>

      </div>




      </div>


        </div>


        {/* =================================================================== */}
    </div>
    </div>
  )
}

export default Assignment