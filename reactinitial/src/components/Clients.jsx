import React from "react";
import Toggle from "./Toggle";

class Client extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.clientParam.name}</h1>
        {this.props.clientParam.pets.map((p, index) => (
          <div key={index}>
            {" "}
            {p.name} {p.isVaccinated}{" "}
          </div>
        ))}
        <Toggle />
      </div>
    );
  }
}

export default Client;
