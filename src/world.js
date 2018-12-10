import React from "react";
import "./styles.css";
import "./rx/rx.css";
import "./rx/boot.css";

export default class NewWorld extends React.Component {
  render() {
    console.log(this.props.logThis);
    if (this.props.rxinstalled == "no") {
      console.error(this.props.rxdetail);
      return <h1>NO RX INSTALLED.</h1>;
    } else {
      return (
        <div>
          <div class="rx rx-component">
            <div class="rx-header">
              <WorldHeader />
            </div>
            <WorldBody />
          </div>
        </div>
      );
    }
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

class WorldBody extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}
