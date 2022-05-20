import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div class="drawer drawer-mobile ">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content bg-purple-100 m-5 lg:p-10 rounded-lg ">
                        <Outlet />
                        
                    </div>
                    <div class="drawer-side border border-solid border-slate-200 rounded-lg m-5">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard/'>My Appointment</Link></li>
                            <li><Link to='/dashboard/myreview'>My Review</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;