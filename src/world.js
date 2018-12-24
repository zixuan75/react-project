import React from "react";
import "./styles.css";
import "./rx/rx.css";
import "./rx/boot.css";

export default class NewWorld extends React.Component {
  render() {
    console.log(this.props.logThis);
    if (this.props.rxinstalled == "no") {
      console.error(this.props.rxdetail);
      return <h1 className="error">NO RX INSTALLED.</h1>;
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
        <div>
          <p className="h1">Welcome here!</p>
          <p>
            <img
              id="blue-line"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/LYNX_Car_104_at_TremontStation.jpg"
              width="175"
            />
            If you feel like a world, you can click on "Change It!" as many
            times as you want to guess who will be the winner: you (or X as
            displayed in the game) or your friend (or O as displayed in the
            game) so you can see who has the most energy of React + JSX.
          </p>
        </div>
        <br />
        <input className="squares-i" readOnly value={status} />
        <p className="allow-margins">[{this.state.status}]: Near Winner</p>
        <button className="btn" onClick={() => this.handleClick()}>
          Change It!
        </button>
      </div>
    );
  }
}
