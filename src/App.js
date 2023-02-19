import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import { Navbar } from './components/Navbar';
import Signup from './routes/Signup';
import Login from './routes/Login';
import HomeWrapper from './routes/HomeWrapper';
import UserDashboard from './components/UserDashboard';
import Machines from './components/Machines';
import HackMachine from './components/HackMachine';
import { useDispatch, useSelector } from 'react-redux';
import { verifyJwtToken } from './utils/requests';
import { setLoggedIn } from './redux/slices/userSlice';
import GridSample from './components/GridSample';
import DefaultWrapper from './routes/DefaultWrapper';
import DefaultDashboard from './routes/DefaultDashboard';


function App() {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const dispatch = useDispatch()
  if (localStorage.getItem("token")) {
    console.log("this is token", localStorage.getItem("token"))
    verifyJwtToken(localStorage.getItem("token")).then(res => {
      let obj = {
        id: res.data.id,
        email: res.data.email,
        token: localStorage.getItem("token"),
        points: res.data.points
      }
      dispatch(setLoggedIn(obj))
    })
  }
  else {
    console.log("token not found")
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={loggedIn ? <HomeWrapper /> : <Login />} >
          <Route index element={<UserDashboard />} />
          <Route path="machines" element={<Machines />} />
          <Route path="machines/:id" element={<HackMachine />} />
        </Route>
        <Route path="/testhome" element={loggedIn ? <DefaultWrapper/> : <Login />} >
          <Route index element={<DefaultDashboard/>} />
          <Route path="testmachines" element={<Machines />} />
          <Route path="testmachines/:id" element={<HackMachine />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path ="/sample" element={<GridSample/>} />
      </Routes>
    </>
  );
}

export default App;
