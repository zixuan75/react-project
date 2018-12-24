// Welcome to the Complex App!
// Author github:zixuan75 <wzixuanCC@gmail.com>/<wzixuanCC@hotmail.com>

// index.js (version 1.0.7)
import React from "react";
import ReactDOM from "react-dom";
import NewWorld from "./world.js";
import "./styles.css";

var properties = {
  myProperty: "This is a property",
  rxdetail: "RX is installed.",
  rxinstalled: "yes"
};

// Begin of main file
// --------------------------
export default class MainLayout extends React.Component {
  render() {
    console.log(this.props.logThis);
    return (
      <div className="body">
        {this.props.header}
        <hr />
        <div className="main">
          <p>{this.props.logThis}.</p>
          {this.props.content}
        </div>
        <hr />
        {this.props.footer}
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return <p className="h1">Hello world</p>;
  }
}
class Footer extends React.Component {
  render() {
    return <p>Thank you for visiting the main page.</p>;
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
        {this.renderUser()}
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
            id={textClassName}
            placeholder="Type a post"
            onChange={this.handleChange2}
            value={this.state.text}
          />
          <br />
          <button className="btn-300">
            Save Post #{this.state.items.length + 1}
          </button>
        </form>
        <br />
        <div>
          <p>You have {this.state.items.length} posts:</p>
          {this.renderItems()}
        </div>
      </div>
    );
  }
  renderUser() {
    if (this.state.myuser) {
      return <p className="right">Hello, {this.state.myuser}!</p>;
    } else {
      return <p className="right">Hello Stranger</p>;
    }
  }
  getItems() {
    return this.state.items;
  }
  renderItems() {
    return this.getItems().map(item => {
      var theVarcharValueOfPosts = this.state.items.length;
      return (
        <List
          myVarcharValueForPost={theVarcharValueOfPosts}
          key={item.id}
          item={item}
        />
      );
    });
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
      console.error("Please enter a correct user at: index.js:react, line 137");
      // return;
    }
    if (!this.state.text.length) {
      console.error("Please enter a post at: index.js:react, line 141");
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
        <div className="auto-message-box">
          <p className="auto-message auto-message-display-none">
            React and ReactDOM 16.5.2, ReactScripts 2.1.1@latest
          </p>
        </div>
        <div className="auto-message-box">
          <p className="auto-message">{message}!</p>
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
    let { item } = this.props;
    return (
      <div className="varchar-list">
        <div className="the-varchar-value">
          Submit value of {this.props.myVarcharValueForPost}
        </div>
        <div className="list">
          <p className="h3">{item.user}</p>
          <br />
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
}

// End of main file
// -------------------------------------------------
// Router configuration
function RenderWorld(root) {
  if (!root) {
    throw new Error("No root defined", "index.js", 223);
  }
  ReactDOM.render(
    <NewWorld
      rxinstalled={properties.rxinstalled}
      rxdetail={properties.rxdetail}
      logThis={properties.myProperty}
    />,
    document.getElementById(root)
  );
}
function RenderMainLayout(root, header, content, footer) {
  if (!root) {
    throw new Error("No root defined", "index.js", 236);
  }
  ReactDOM.render(
    <MainLayout
      header={header}
      content={content}
      footer={footer}
      logThis={properties.myProperty}
    />,
    document.getElementById(root)
  );
}

RenderMainLayout("root", <Header />, <App />, <Footer />);

RenderWorld("world");
