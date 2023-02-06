import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import { Navbar } from './components/Navbar';
import Signup from './routes/Signup';
import Login from './routes/Login';
import HomeWrapper from './routes/HomeWrapper';
import UserDashboard from './components/UserDashboard';
import Machines from './components/Machines';
import HackMachine from './components/HackMachine';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path = "/home" element = {<HomeWrapper/>} >
          <Route index element = {<UserDashboard/>} />
          <Route path= "machines" element = {<Machines/>} />
          <Route path= "machines/:id" element = {<HackMachine/>} />
        </Route>
      <Route path="/login" element={<Login/>} />
      <Route path ="/signup" element = {<Signup/>} />
   </Routes>
   </>
  );
}

export default App;
