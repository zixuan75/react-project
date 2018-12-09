// index.js (version 1.0.0)
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class MainLayout extends React.Component {
  render() {
    console.log(this.props.logThis);
    return (
      <div>
        <App />
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
        <div>
          <h1>Hello world!</h1>
        </div>
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
      console.error("Please enter a post at: index.js:react, line 55");
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
              <a className="navbar-brand">My Site Name</a>
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
const rootElement = document.getElementById("root");
ReactDOM.render(<MainLayout logThis="This is a property" />, rootElement);
