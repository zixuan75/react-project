import React from "react";

export default class NewWorld extends React.Component {
  render() {
    console.log(this.props.logThis);
    return <h1>Hello another world!</h1>;
  }
}
