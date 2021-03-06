// Welcome to the Complex App!
// Author github:zixuan75 <wzixuanCC@gmail.com>/<wzixuanCC@hotmail.com>

// index.js (version 1.0.7)
import React from "react";
import ReactDOM from "react-dom";
import NewWorld from "./world.js";
import "./styles.css";

// Properties
var properties = {
  myProperty: "This is a property",
  rxdetail: "RX is installed.",
  rxinstalled: "yes", // no or yes, rxinstalled property
  renderIfInstalled(nChecks) {
    if (this.rxinstalled === "yes") {
      return (
        <div className="rx-property">
          <p>Yes, RX is installed at {"v" + nChecks}.</p>
        </div>
      );
    } else {
      return (
        <div className="rx-property">
          <p>No, RX is not installed.</p>
        </div>
      );
    }
  }
};

// ----------- Begin of main file ------------
export default class MainLayout extends React.Component {
  render() {
    console.log(this.props.logThis);
    return (
      <div className="body">
        {this.props.header}
        <hr />
        <div className="main">
          <p>{this.props.logThis}</p>
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
    return (
      <p className="h1" id="hello-heading">
        Hello world
      </p>
    );
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
    // let { myuser } = this.state;
    return (
      <div className="App">
        {/* 
          Hello and welcome here, everybody. 
          You're free to edit this file anytime at my github repository
          https://github.com/zixuan75/react-project by forking
          the project and making some commits.
        */}
        {/*
          Make sure to make a pull request from your repisitory
          to my repository so I can receive the same changes that you made.
        */}
        <Text buttonName="Click me!" properties={properties}>
          <div className="yellow">
            <div className="auto-message-box">
              <p className="auto-message">Hi everybody!</p>
            </div>
            <p>Wallo.</p>
          </div>
        </Text>
        <form onSubmit={this.handleSubmit}>
          <input
            aria-label="User name"
            placeholder="User name"
            id={userClassName}
            value={this.state.user}
            onChange={this.handleChange1}
          />
          <br />
          <textarea
            aria-label="Type a post"
            id={textClassName}
            placeholder="Type a post"
            onChange={this.handleChange2}
            value={this.state.text}
          />
          <br />
          <button className="btn-300 btn-card-vertical row-del">
            Save Post #{this.state.items.length + 1}
          </button>
        </form>
        <br />
        <div>
          <div className="post-number-value-outline">
            <div className="post-number-values post-number-values-default">
              {this.renderNumberOfPosts(1)}
            </div>
          </div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
  renderNumberOfPosts(mininum) {
    var { length } = this.state.items;
    if (length === mininum) {
      return (
        <p className="post-number-value">
          You have {length} post. Keep adding more posts!
        </p>
      );
    } else if (length === mininum - 1) {
      return (
        <p className="post-number-value">
          You have {length} posts. Try to turn it first.
        </p>
      );
    } else {
      return (
        <p className="post-number-value">
          You have {length} posts. Great post work! You've got it!'
        </p>
      );
    }
  }
  getItems() {
    var { items } = this.state;
    return items;
  }
  renderItems() {
    return this.getItems().map((item) => {
      var theVarcharValueOfPosts = this.state.items.length;
      return (
        <div>
          <List
            myVarcharValueForPost={theVarcharValueOfPosts}
            key={item.id}
            item={item}
          />
        </div>
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
      console.error("Please enter a correct user at: index.js:react, line 186");
      // return;
    }
    if (!this.state.text.length) {
      console.error("Please enter a post at: index.js:react, line 190");
      return;
    }
    const newItem = {
      text: this.state.text,
      user: this.state.user,
      id: performance.now()
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
      user: ""
    }));
  }
}
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myuser: "zixuan"
    };
  }
  renderUser() {
    if (this.state.myuser) {
      return <p className="text-align-right">Hello {this.state.myuser}</p>;
    } else {
      return <p className="text-align-right">Hello Stranger</p>;
    }
  }
  render() {
    let { message, buttonName } = this.props;
    return (
      <div>
        {this.props.children}
        <div>{this.renderUser()}</div>
        <a href="#content">
          <img
            width="100"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/LYNX_Car_104_at_TremontStation.jpg"
            alt="Lynx Car #104 at Tremont Station"
          />
        </a>
        <br />
        <br />
        <button
          className="btn"
          onClick={() => this.handleClick("Hello world!")}
        >
          {buttonName}
        </button>
        <div className="auto-message-box">
          <p className="auto-message auto-message-display-none">
            React and ReactDOM 16.5.2, ReactScripts 2.1.3@latest
          </p>
        </div>
        <div className="auto-message-box">
          <p className="auto-message">{message}!</p>
        </div>
        {this.props.properties.renderIfInstalled("1.3.2")}
      </div>
    );
  }
  handleClick(message) {
    alert(message);
  }
}
class List extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <div className="varchar-list">
        <div className="the-varchar-value">
          <p>{this.props.myVarcharValueForPost} posts in all</p>
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

/* 
  End of main file
  ------------------------------------------------------------
  Router configuration
*/
function RenderWorld(root) {
  if (!root) {
    throw new Error("No root defined", "index.js", 300);
  }
  ReactDOM.render(
    <NewWorld
      rxinstalled={properties.rxinstalled}
      rxdetail={properties.rxdetail}
      logThis={properties.myProperty + " (another one)"}
    />,
    document.getElementById(root)
  );
}
function RenderMainLayout(root, header, content, footer) {
  if (!root) {
    throw new Error("No root defined", "index.js", 313);
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
