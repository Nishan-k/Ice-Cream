import React from "react";
import classes from "../Icecream/Icecream.module.css";
import { Ingredients } from "./Ingredients/Ingredients";
import { Aux } from "../../Hoc/Auxiliary";

export const Icecream = (props) => {
  let userInputs = Object.keys(props.types)
    .map((ig) => {
      return [...Array(props.types[ig])].map((_, i) => {
        return <Ingredients key={ig + 1} type={ig} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // .reduce((arr, el) => {
  //   return arr.concat(el);
  // }, []);

  const message = {
    color: "#ff6347",
    marginRight: "80px",
    fontWeight: "bold",
  };
  if (userInputs.length === 0) {
    userInputs = <p style={message}>PLEASE START ADDING FLAVORS</p>;
  }
  return (
    <Aux>
      <div className={classes.Content}>{userInputs}</div>

      <Ingredients type="Cup" />
    </Aux>
  );
};
