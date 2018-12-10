import React from "react";

export default class NewWorld extends React.Component {
  render() {
    console.log(this.props.logThis);
    console.warn(this.props.rxdetail);
    return <WorldHeader />;
  }
}

function WorldHeader() {
  return (
    <div>
      <a href="#content">Home</a>
      <a href="#new">Page</a>
    </div>
  );
}
