import React from "react";
import classes from "../Ingredients/Ingredients.module.css";

export const Ingredients = (props) => {
  let Ingredient = "";
  switch (props.type) {
    case "Chocolate":
      Ingredient = <div className={classes.Chocolate}></div>;
      break;

    case "Strawberry":
      Ingredient = <div className={classes.Strawberry}></div>;
      break;

    case "Vanilla":
      Ingredient = <div className={classes.Vanilla}></div>;
      break;

    case "Cup":
      Ingredient = <div className={classes.Cup}></div>;
    default:
      break;
  }
  return Ingredient;
};
