import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { FaUserAlt } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    console.log(user)
    const menuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/contact-us'>Contact us</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            
        </>
    return (
        <div className="container mx-auto p-5 lg:py-5">
            <div className="navbar bg-base-100 drop-shadow-xl rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Care Aid</Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn btn-primary">{user.displayName} <span className='text-lg ml-2.5'><MdLogout></MdLogout></span></button>
                            </> :
                            <Link to='/login' className="btn btn-primary"><FaUserAlt></FaUserAlt></Link>
                    }

                </div>
                <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;