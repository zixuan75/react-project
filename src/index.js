// Welcome to the Complex App!
// Author github:zixuan75 <wzixuanCC@gmail.com>/<wzixuanCC@hotmail.com>

// index.js (version 1.0.4)
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
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
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    let className = "new-post";
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
        <Text
          message={"This is Todo v.1.0.0. Welcome"}
          buttonName="Click me!"
        />
        <form onSubmit={this.handleSubmit}>
          <textarea
            id={className}
            placeholder="Type a post"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          <button className="btn-300">Save Post</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      console.error("Please enter a post at: index.js:react, line 71");
      return;
    }
    const newItem = {
      text: this.state.text,
      id: performance.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
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
            <br />
            <div>
              <a className="navbar-brand" href="#">
                Home
              </a>
            </div>
            <br />
            <div>
              <a className="navbar-brand" href="#new">
                Page
              </a>
            </div>
            <br />
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
      <div className="list">
        {items.map(item => (
          <div key={item.id}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

function RenderWorld(root) {
  if (!root) {
    console.error("No root defined (index.js:react, line 137)");
  }
  ReactDOM.render(
    <NewWorld rxdetail={properties.rxdetail} logThis={properties.myProperty} />,
    root
  );
}
function RenderMainLayout(root, header, content) {
  if (!root) {
    console.error("No root defined (index.js:react, line 143).");
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
