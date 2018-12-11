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
          <div className="rx rx-component">
            <div className="rx-header">
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
  constructor(props) {
    super(props);
    this.state = {
      next: true,
      status: "X"
    };
  }
  handleClick() {
    this.setState({
      next: !this.state.next,
      status: this.state.next ? "X" : "O"
    });
  }
  render() {
    const status = "Next changer: " + this.state.status;
    return (
      <div>
        <div>Welcome here.</div>
        <input className="squares-i" value={status} />
        <p className="allow-margins">[{this.state.status}]</p>
        <button className="btn" onClick={() => this.handleClick()}>
          Change It!
        </button>
        <br />
      </div>
    );
  }
}
