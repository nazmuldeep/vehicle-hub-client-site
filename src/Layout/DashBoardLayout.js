import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../SharedItems/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard_drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard_drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashBoard/myProfile">Profile</Link></li>

                        <li><Link to="/dashBoard/advertisement">Show Advertisement</Link></li>
                        <li><Link to="/dashBoard/seller">User Information</Link></li>
                        <li><Link to="/dashBoard/inputCategory">Category Input</Link></li>
                        <li><Link to="/dashBoard/userReport">User Reports</Link></li>

                        <li><Link to="/dashBoard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashBoard/myProduct"> Products</Link></li>
                        <li><Link to="/dashBoard/myBuyers"> Buyers</Link></li>
                        <li><Link to="/dashBoard/myOrder"> Orders</Link></li>
                        {/* <li><Link to="/dashBoard/myOrder"> Orders</Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;