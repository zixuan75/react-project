import React from "react";
import "./styles.css";
import "./rx/rx.css";
import "./rx/boot.css";

export default class NewWorld extends React.Component {
  render() {
    let { logThis } = this.props;
    console.log(logThis);
    if (this.props.rxinstalled === "no") {
      console.error(this.props.rxdetail);
      return (
        <div className="jumbotron">
          <h1 className="error">No RX installed.</h1>
          <p>Please install RX to function the classes correctly.</p>
        </div>
      );
    } else if (this.props.rxinstalled === "yes") {
      return (
        <div>
          <div className="rx rx-component">
            <div className="rx-header">
              <WorldHeader />
            </div>
            <WorldBody
              alt="Lynx Blue Line at Tremont Station"
              buttonName="Change it!"
              logThis={logThis}
            />
            <hr />
            <div>
              <WorldFooter />
            </div>
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
      status: "X",
      alternateVal: "RX-World component"
    };
  }
  handleClick() {
    this.setState(state => ({
      next: !state.next,
      status: state.next ? "X" : "O"
    }));
    console.log("Set to " + (this.state.next ? "X" : "O"));
  }
  render() {
    const status = "Next changer: " + this.state.status;
    let { buttonName } = this.props;
    return (
      <div>
        <div className="sr-only">
          <p>{this.state.alternateVal}</p>
        </div>
        <div className="jumbotron">
          <p className="h1">Welcome here!</p>
          <p>
            <img
              id="blue-line"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/LYNX_Car_104_at_TremontStation.jpg"
              width="175"
              alt={this.props.alt}
            />
            If you feel like a world, you can just close your eyes and click on
            the blue <span className="button-structure">{buttonName}</span>{" "}
            button as many times as you want to guess who will be the winner:
            you (or X as displayed in the game) or your friend (or O as
            displayed in the game) so you can see who has the most energy of
            React + JSX.
          </p>
        </div>
        <br />
        <div>
          <p>{this.props.logThis}</p>
        </div>
        <input className="squares-i" readOnly value={status} />
        <p className="allow-margins">
          [{this.state.status}]: Near Winner (Please be careful of the "near".
          After you stop clicking it, the number shown in the box above is the
          real winner.)
        </p>
        <button className="btn" onClick={() => this.handleClick()}>
          {buttonName}
        </button>
      </div>
    );
  }
}

class WorldFooter extends React.Component {
  render() {
    return (
      <footer>
        <p>Thank you for visiting the React world page.</p>
      </footer>
    );
  }
}
