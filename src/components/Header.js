import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
        <div className="header">
            <div className="logo">
                <h2 className="">School Management System</h2>
            </div>
            <div className="navbar">
                <Link to={"/login"} className="login">
                    Login
                </Link>
            </div>

        </div>
        </header>
    );
};
export default Header;