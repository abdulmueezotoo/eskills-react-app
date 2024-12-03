import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
    return(
        <div className="hero-container">
            <div className="hero">
                <h1 className="">
                    Welcome to Benji's School Management System
                </h1>
                <p>
                    This is a school management system that allows teachers to manage their classes, students to view their grades
                </p>
                <div className="hero-actions">
                    <Link to="/login" className="signup">Login</Link>
                    <a href="learnmore" className="hero-btn more">Learn More</a>
                </div>
                <div className="hero-image">
                    <img src="SM Images/image1.gif" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Content;