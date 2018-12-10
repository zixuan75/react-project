// Welcome to the Complex App!
// Author github:zixuan75 <wzixuanCC@gmail.com>/<wzixuanCC@hotmail.com>

// index.js (version 1.0.4)
import React from "react";
import ReactDOM from "react-dom";
import NewWorld from "./world.js";
import "./styles.css";

var properties = {
  myProperty: "This is a property",
  rxdetail: "No RX installed."
};
export default class MainLayout extends React.Component {
  render() {
    console.log(this.props.logThis);
    return (
      <div>
        {this.props.header}
        {this.props.content}
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      user: "",
      myuser: "zixuan"
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    let textClassName = "new-post";
    let userClassName = "user";
    let { myuser } = this.state;
    return (
      <div>
        {/* 
          Welcome, everybody. 
          You're free to edit this file anytime at my github repository
          https://github.com/zixuan75/react-project by forking
          the project and making some commits.
        */}
        {/*
          Make sure to make a pull request from your repisitory
          to my repository so I can receive the same changes that you made.
        */}
        <p className="right">Hello {myuser}!</p>
        <Text
          message={"This is Todo v.1.0.4. Welcome"}
          buttonName="Click me!"
        />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="User name"
            id={userClassName}
            value={this.state.user}
            onChange={this.handleChange1}
          />
          <br />
          <textarea
            rols="10"
            cols="50"
            id={textClassName}
            placeholder="Type a post"
            onChange={this.handleChange2}
            value={this.state.text}
          />
          <br />
          <button className="btn-300">Save Post</button>
        </form>
        <br />
        <List items={this.state.items} />
      </div>
    );
  }
  handleChange1(e) {
    this.setState({ user: e.target.value });
  }
  handleChange2(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.user.length) {
      console.error("Please enter a correct user at: index.js:react, line 101");
    }
    if (!this.state.text.length) {
      console.error("Please enter a post at: index.js:react, line 104");
      return;
    }
    const newItem = {
      text: this.state.text,
      user: this.state.user,
      id: performance.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: "",
      user: ""
    }));
  }
}
class Text extends React.Component {
  render() {
    let { message, buttonName } = this.props;
    return (
      <div>
        <div className="navbar-collector">
          <div className="navbar-items">
            <div className="navbar-item">
              <br />
              <a className="navbar-brand" href="#content">
                <span>Home</span>
              </a>
              <br />
              <br />
            </div>
            <div className="navbar-item">
              <br />
              <a className="navbar-brand" href="#new">
                <span>Page</span>
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
        <button className="btn" onClick={this.handleClick}>
          {buttonName}
        </button>
        <div>
          <p>{message}!</p>
        </div>
      </div>
    );
  }
  handleClick() {
    let variable = "Hello world";
    alert(variable);
  }
}
class List extends React.Component {
  render() {
    let { items } = this.props;
    return (
      <div>
        {items.map(item => (
          <div className="list" key={item.id}>
            <h3>{item.user}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

function RenderWorld(root) {
  if (!root) {
    console.error("No root defined (index.js:react, line 176)");
  }
  ReactDOM.render(
    <NewWorld rxdetail={properties.rxdetail} logThis={properties.myProperty} />,
    root
  );
}
function RenderMainLayout(root, header, content) {
  if (!root) {
    console.error("No root defined (index.js:react, line 185).");
  }
  ReactDOM.render(
    <MainLayout
      header={header}
      content={content}
      logThis={properties.myProperty}
    />,
    root
  );
}
const rootElement = document.getElementById("root");
RenderMainLayout(rootElement, <Header />, <App />);

const worldElement = document.getElementById("world");
RenderWorld(worldElement);
