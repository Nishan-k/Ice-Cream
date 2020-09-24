import React from "react";
import { Aux } from "../../Hoc/Auxiliary";
import classes from "../Layout/Layout.module.css";
import { Navbar } from "../Navbar/Navbar";

export const Layout = (props) => {
  return (
    <Aux>
      <div className={classes.Layout}>
        <Navbar />
      </div>

      <main className={classes.Children}>{props.children}</main>
    </Aux>
  );
};
