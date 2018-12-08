// index.js (version 1.0.0)
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
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
    return (
      <div>
        <h1>Hello world</h1>
        <Text message={"This is Todo v.1.0.0. Welcome"} />
        <form onSubmit={this.handleSubmit}>
          <textarea
            id="new-post"
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
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}
class Text extends React.Component {
  render() {
    return (
      <div>
        <p>My Site Name</p>
        <button class="btn" onClick={() => alert("click")}>
          Click me!
        </button>
        <br />
        {this.props.message}!
      </div>
    );
  }
}
class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <div key={item.id}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
