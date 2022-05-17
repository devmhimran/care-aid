import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Shared/Navbar';
import About from './component/About/About';
import Appointment from './component/Appointment/Appointment';
import Reviews from './component/Reviews/Reviews';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import Register from './component/Register/Register';


function App() {
  return (
    <div >
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
        <Route path="/contact-us" element={<Contact></Contact>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
    
  );
}

export default App;
