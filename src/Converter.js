import React from "react";

class Converter extends React.Component {
  render() {
    return (
      <div>
        {this.props.currency === "usd"
          ? `USD ${this.props.convertToUSD(this.props.amount)}`
          : `CAD ${this.props.convertToCAD(this.props.amount)}`}
      </div>
    );
  }
}

export default Converter;
