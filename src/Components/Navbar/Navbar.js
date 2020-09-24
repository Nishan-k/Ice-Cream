import React from "react";
import { Aux } from "../../Hoc/Auxiliary";
import classes from "../Navbar/Navbar.module.css";

export const Navbar = () => {
  return (
    <Aux>
      <div className={classes.Navbar}>
        <div>
          <h3>LOGO</h3>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Ice-Cream Builder</a>
            </li>
            <li>
              <a href="#">Check-Out</a>
            </li>
          </ul>
        </nav>
      </div>
    </Aux>
  );
};
