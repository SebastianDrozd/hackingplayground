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


function App() {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const dispatch = useDispatch()
  if (localStorage.getItem("token")) {
    verifyJwtToken(localStorage.getItem("token")).then(res => {
      console.log("this is id", res.data[0].id)
      let obj = {
        id: res.data[0].id,
        email: res.data[0].email,
        token: localStorage.getItem("token"),
        points: res.data[0].points
      }
      console.log("this is response data", res.data)
      console.log("this is object that will be sent to redux", obj)
      dispatch(setLoggedIn(obj))
    })
  }
  else {
    console.log("token not found")
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={loggedIn ? <HomeWrapper /> : <Login />} >
          <Route index element={<UserDashboard />} />
          <Route path="machines" element={<Machines />} />
          <Route path="machines/:id" element={<HackMachine />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
