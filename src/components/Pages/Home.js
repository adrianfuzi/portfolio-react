import React from "react";
import { NavLink } from "react-router-dom";

const home = (props) => {
  return (
    <main className="page page-home">
      <div className="content content-home">
        <div className="content__title">Hello</div>
        <p className="content__text">
          I am Adrian Füzi and it is my passion to design and develop excellent
          websites for the modern web.
          <NavLink to={props.link} className="link" onClick={props.clickLink}>
            {props.linkName}
          </NavLink>
        </p>
        <NavLink to={props.navTo} className="btn" onClick={props.click}>
          {props.navName}
        </NavLink>
      </div>
    </main>
  );
};

export default home;
