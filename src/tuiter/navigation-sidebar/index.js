import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { name: "home", icon: "fas fa-home" },
    { name: "explore", icon: "fas fa-hashtag" },
    { name: "notifications", icon: "fas fa-bell" },
    { name: "messages", icon: "fas fa-envelope" },
    { name: "bookmarks", icon: "fas fa-bookmark" },
    { name: "lists", icon: "fas fa-list-ul" },
    
    { name: "more", icon: "fas fa-ellipsis-h" },
  ];

  return (
    <div className="list-group">
      {links.map((link, index) =>
        typeof link === "object" ? (
          <Link
            to={`/tuiter/${link.name}`}
            className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}
            key={index}
          >
            <i className={link.icon}></i> {link.name}
          </Link>
        ) : (
          <Link
            to={`/tuiter/${link}`}
            className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}
            key={index}
          >
            {link}
          </Link>
        )
      )}

{!currentUser && (
        <>
          <Link to="/tuiter/login" className="list-group-item text-capitalize">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <Link to="/tuiter/register" className="list-group-item text-capitalize">
            <i className="fas fa-user-plus"></i> Register
          </Link>
        </>
      )}
      {currentUser && (
        <Link to="/tuiter/profile" className="list-group-item text-capitalize">
          <i className="fas fa-user"></i> Profile
        </Link>
      )}
    </div>
  );
};

export default NavigationSidebar;
