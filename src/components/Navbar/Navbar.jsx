import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex py-9 w-full shadow-lg items-center justify-between">
        {/* nav left section */}
        <div className="flex">
          <img className="" src={menu_icon} alt="" />
          <img className="w-32.5" src={logo} alt="" />
        </div>

        {/* nav middle section */}
        <div className="flex">
          <input type="text" placeholder="Search" className="border transparent w-100 py-2 px-3 mr-3.75 rounded-lg"/>
          <img src={search_icon} alt="" />
        </div>

        {/* nav right section */}
        <div className="flex space-x-7 right-navbar">
          <img src={upload_icon} alt="upload_icon" />
          <img src={more_icon} alt="more_icon" />
          <img src={notification_icon} alt="notification_icon" />
          <img src={profile_icon} alt="profile-icon" className="rounded-full"/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
