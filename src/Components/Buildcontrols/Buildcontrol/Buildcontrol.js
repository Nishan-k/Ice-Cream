import React from "react";
import classes from "../Buildcontrol/Buildcontrol.module.css";

export const Buildcontrol = (props) => {
  return (
    <div className={classes.Content}>
      <div>{props.label}</div>
      <div className={classes.button}>
        <button onClick={props.addFlavor}>MORE</button>
        <button onClick={props.deleteFlavor} disabled={props.disable}>
          LESS
        </button>
      </div>
    </div>
  );
};
