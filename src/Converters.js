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
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        convertToUSD: this.convertToUSD,
        convertToCAD: this.convertToCAD,
        amount: this.state.amount
      });
    });
    return children;
  }
}

export default Converters;
