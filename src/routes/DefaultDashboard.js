import React, { useEffect, useState } from 'react'
import "../css/DefaultDashboard.css"
import hack2 from '../assets/Hack2.jpg'
import DashboardCards from '../components/DashboardCards'
import DefaultRecent from '../components/DefaultRecent'
import LandingFooter from '../components/LandingFooter'
import { useSelector } from 'react-redux'
import { getCompletedMachines, getRecentMachines } from '../utils/requests'
import ChartComponent from '../components/ChartComponent'
const DefaultDashboard = () => {
  
  const email = useSelector(state => state.user.email)
  const points = useSelector(state => state.user.points)
  const userid = useSelector(state => state.user.id)
  const token = useSelector(state => state.user.token)
  const [completedMachines, setCompletedMachines] = useState([])
  const [recentMachines, setRecentMachines] = useState([])

  useEffect(() => {
    getCompletedMachines(token, userid).then(res => {
        setCompletedMachines(res.data);
    })
    getRecentMachines(token, userid).then(res => {
        setRecentMachines(res.data)
    })
  }, [])
  return (
    <>
      <div className='dash-cont'>
        <div className="dash-news">
          <img className='dash-img' src={hack2} alt="" />
        </div>
        <div className='dash-user-info'>
          <div className='dash-user-info-profile'>
            <i class="fa fa-laptop logos" aria-hidden="true"></i>
            <br />
            <br />
            <span>
              <i style={{ color: 'orange', fontSize: '20px' }} class="fa fa-envelope-o" aria-hidden="true"></i>
              <p className='email-info'>{email}</p>
            </span>
            <br />
            <span>
              <i style={{ color: '#ce3aff', fontSize: '20px' }} class="fa fa-laptop" aria-hidden="true"></i>
              <p className='email-info'>{completedMachines.length} Machine Owns</p>
            </span>
            <br />
            <span>
              <i style={{ color: 'yellow', fontSize: '20px' }} class="fa fa-star" aria-hidden="true"></i>
              <p className='email-info'>{points} Points Earned</p>
            </span>
            <br />
          </div>
          <div className='dash-user-info-points'>
            <h3 className='prog-title'>My Recent Progress</h3>
            <ChartComponent completed={completedMachines && completedMachines.filter((machine) => {
              return new Date(machine.datecompleted) >= new Date().setDate(new Date().getDate() - 6)
            })} />
          </div>
        </div>
      </div>
      <DashboardCards />
      <DefaultRecent recents={recentMachines} />
      <br />
      <br />
      <br />
      <LandingFooter />
    </>
  )
}

export default DefaultDashboard