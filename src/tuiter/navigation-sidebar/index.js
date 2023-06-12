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
    { name: "profile", icon: "fas fa-user" },
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
      {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
     { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}

    </div>
  );
};

export default NavigationSidebar;
