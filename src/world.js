import React from "react";

export default class NewWorld extends React.Component {
  render() {
    console.log(this.props.logThis);
    console.warn(this.props.rxdetail);
    return <WorldHeader />;
  }
}

const WorldHeader = () => <h1>Hello another world</h1>;
