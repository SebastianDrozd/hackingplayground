import React from 'react'
import "../css/DashboardCards.css"
import machine from "../assets/machines.svg"
import tracks from "../assets/tracks.svg"
import challenges from "../assets/challenges.svg"
import battleground from "../assets/battlegrounds.svg"
const DashboardCards = () => {
  return (
    <>
      <div className="dash-cards-cont">
        <div className='dash-card'>
          <img src={machine} height="100" width={100} alt="" />
          <h4 className='machines-title-p'>Machines</h4>
          <div style={{ padding: '1em' }}>
            <p className='inner-sub-p'>Choose from a wide array of range difficulty to test out your skills!</p>
          </div>
        </div>
        <div className='dash-card'>
          <img src={tracks} height="100" width={100} alt="" />
          <h4 className='machines-title-p'>Browser Vm's</h4>
          <div style={{ padding: '1em' }}>
            <p className='inner-sub-p'>Access your own browser based parrot os instance and hack away without a vpn!</p>
          </div>
        </div>
        <div className='dash-card'>
          <img src={challenges} height="100" width={100} alt="" />
          <h4 className='machines-title-p'>Parrot Os</h4>
          <div style={{ padding: '1em' }}>
            <p className='inner-sub-p'>Run your own parrot os instance, all from inside your browser and hackaway!</p>
          </div>
        </div>
        <div className='dash-card'>
          <img src={battleground} height="100" width={100} alt="" />
          <h4 className='machines-title-p'>Battlegrounds</h4>
          <div style={{ padding: '1em' }}>
            <p className='inner-sub-p'>Choose from a wide array of range difficulty to test out your skills!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardCards