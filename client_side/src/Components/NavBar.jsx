import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }



    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
    </>
    return (
        <div className="navbar py-4 bg-[#ACA6A680]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold"><img className="w-6" src={`https://media.licdn.com/dms/image/C560BAQGoq0G9Tn85Zg/company-logo_200_200/0/1623580142120/ssh_tech_logo?e=2147483647&v=beta&t=SiWMMtxQ4VwTathJwN3iFjLR7G3nDiG0wgs7uGf6OTk`} alt="" />TECHies</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogOut} className="btn">Log Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Log In</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;