import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import { Navbar } from './components/Navbar';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path = "/dashboard" element = {<Dashboard/>} />
      
      <Route path="/login" element={<Login/>} />
      <Route path ="/signup" element = {<Signup/>} />
   </Routes>
   </>
  );
}

export default App;
