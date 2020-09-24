import React from "react";
import classes from "../Buildcontrols/Buildcontrols.module.css";
import { Buildcontrol } from "./Buildcontrol/Buildcontrol";

export const Buildcontrols = (props) => {
  const ingredients = [
    { label: "Strawberry", value: "strawberrry" },
    { label: "Chocolate", value: "Chocolate" },
    { label: "Vanilla", value: "vanilla" },
  ];

  return (
    <div className={classes.Content}>
      <div>
        <p>
          The price is:{" "}
          <strong>
            {props.totalPrice} <span>€</span>
          </strong>
        </p>
      </div>
      <div>
        {ingredients.map((ig) => {
          return (
            <Buildcontrol
              label={ig.label}
              key={ig.label}
              addFlavor={() => props.add(ig.label)}
              deleteFlavor={() => props.delete(ig.label)}
              disable={props.disableButton[ig.label]}
              priceDeterminer={() => props.price(ig.label)}
            />
          );
        })}
      </div>

      <button>CHECKOUT</button>
    </div>
  );
};
