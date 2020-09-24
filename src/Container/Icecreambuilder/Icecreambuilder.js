import React, { Component } from "react";
import { Aux } from "../../Hoc/Auxiliary";
import classes from "../Icecreambuilder/Icecreambuilder.module.css";
import { Icecream } from "../../Components/Icecream/Icecream";
import { Buildcontrols } from "../../Components/Buildcontrols/Buildcontrols";

const FLAVOR_PRICES = {
  Chocolate: 0.8,
  Strawberry: 1,
  Vanilla: 0.98,
};

export default class Icecreambuilder extends Component {
  state = {
    flavors: {
      Chocolate: 0,
      Strawberry: 0,
      Vanilla: 0,
    },
    ingredientDeductable: true,
    totalPrice: 4,
  };

  addFlavorhandler = (label) => {
    let currentState = {
      ...this.state.flavors,
    };
    let oldCount = this.state.flavors[label];
    let newCount = oldCount + 1;
    currentState[label] = newCount;
    this.setState({
      flavors: currentState,
    });
  };

  deleteFlavorhandler = (label) => {
    let currentState = {
      ...this.state.flavors,
    };
    let oldCount = this.state.flavors[label];
    let newCount = oldCount - 1;
    currentState[label] = newCount;
    this.setState({
      flavors: currentState,
    });
  };

  dedeuctIngredientHandler = () => {
    return null;
  };

  priceHandler = (type) => {
    let basePrice = this.state.totalPrice;
    let newPrice = basePrice + FLAVOR_PRICES[type];
    this.setState({
      totalPrice: newPrice,
    });
  };

  render() {
    return (
      <Aux>
        <div className={classes.Content}>
          <Icecream types={this.state.flavors} />
          <Buildcontrols
            add={this.addFlavorhandler}
            delete={this.deleteFlavorhandler}
            disableButton={this.state.ingredientDeductable}
            totalPrice={this.state.totalPrice}
            price={this.priceHandler}
          />
        </div>
      </Aux>
    );
  }
}
