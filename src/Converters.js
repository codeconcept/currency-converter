import React from "react";

class Converters extends React.Component {
  state = { amount: 100, currency: "eur", euroToUSD: 1.11, euroToCAD: 1.46 };

  convertToUSD = () => {
    return (this.state.amount * this.state.euroToUSD).toFixed(2);
  };

  convertToCAD = () => {
    return (this.state.amount * this.state.euroToCAD).toFixed(2);
  };

  render() {
    return this.props.render({
      amount: this.state.amount,
      convertToUSD: this.convertToUSD,
      convertToCAD: this.convertToCAD
    });
  }
}

export default Converters;
