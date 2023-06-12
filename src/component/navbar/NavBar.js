import React from "react";
import { Fragment } from "react";
import "./NavBar.css";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const NavBar = ({ logo }) => {
    return (
        <Fragment>
            <div className="navbar">
                <div className="left">
                    <img src={logo} />
                    <div className="menuItem">
                        <a href="#" >Shop</a>
                        <a href="#" >Mobile</a>
                        <a href="#" >RV & AV</a>
                        <a href="#" >Home Appliances</a>
                        <a href="#" >IT</a>
                        <a href="#" >SmartThings</a>
                    </div>
                </div>
                <div className="right">
                    <div className="rightMenu">
                        <a href="#" >Support</a>
                        <a href="#" >For Bussiness</a>
                    </div>
                    <a className="rightIcons" href="#" ><FiSearch /></a>
                    <a className="rightIcons" href="#" ><BsCart2 /></a>
                    <a className="rightIcons" href="#" ><CgProfile /></a>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar;