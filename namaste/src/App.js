import React, { Component } from "react";
import "./App.css";
import MessageBoard from "./components/MessageBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageBoard />
      </div>
    );
  }
}

export default App;

// App => MessageBoard => Messages, Form
