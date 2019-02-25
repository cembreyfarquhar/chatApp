import React, { Component } from "react";
import styled from "styled-components";

import Messages from "./Messages";
import MessageForm from "./MessageForm";
// import { EEXIST } from "constants";

const MessageBoardContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px 10px 0 10px;
  grid-column: 3 / 4;
  grid-row: 2 / 5;
  background-color: #CFFFE5;
  overflow: hidden;
  h1 {
    font-size: 54px;
    color: #CFFFE5;
    margin: 0 25px 0 0;
    text-align: right;
    background-color: maroon;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  hr {
    width: 90%;
    border-color: pink;
  }
`;

class MessageBoard extends Component {
  state = {
    messages: [
      // {
      //   id: 0,
      //   text: "Hello"
      // }
      "Hello"
    ],
    messageInput: ""
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      messages: [...this.state.messages, this.state.messageInput],
      messageInput: ""
    });
  };
  render() {
    return (
      <MessageBoardContainer>
        <h1>namaste</h1>
        <hr />
        <Messages messages={this.state.messages} />
        <MessageForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          messageInput={this.state.messageInput}
        />
      </MessageBoardContainer>
    );
  }
}

export default MessageBoard;
