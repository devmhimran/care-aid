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
import ErrorPage from './component/ErrorPage/ErrorPage';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Loading from './component/Loading/Loading';
import Dashboard from './component/Dashboard/Dashboard';
import MyAppointment from './component/MyAppointment/MyAppointment';
import MyReview from './component/MyReview/MyReview';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
        <Route path="/contact-us" element={
          <RequireAuth>
            <Contact></Contact>
          </RequireAuth>
        } />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />



        <Route path="dashboard" element={<Dashboard></Dashboard>} >
            <Route index element={<MyAppointment></MyAppointment>} />
            <Route path="myreview" element={<MyReview></MyReview>} />
        </Route>


        <Route path="/loading" element={<Loading></Loading>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
    </div>

  );
}

export default App;
