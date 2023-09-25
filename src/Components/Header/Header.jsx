import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Header = () => {
          const links = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/donations">Donation</NavLink></li>
          <li><NavLink to="/blogs">Statistics</NavLink></li>
      </>

      
  
          return (
            <div className="overflow-x-hidden">
            <div className="">
            <div className="navbar max-w-7xl mx-auto mt-2">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {links}
                  </ul>
              </div>
              
              <img className="w-36" src="https://i.ibb.co/FVc4HSC/Logo.png" />
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              {links}
              </ul>
            </div>
            
          </div>
          
          </div>
          <div className=" min-h-[70vh]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
          </div>
          );
};

export default Header;