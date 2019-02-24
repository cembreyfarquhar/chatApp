import React, { Component } from "react";
import styled from "styled-components";

import Messages from "./Messages";
import MessageForm from "./MessageForm";
// import { EEXIST } from "constants";

const MessageBoardContainer = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px 15px 0 0;
  max-width: 1000px;
  width: 80%;
  height: 85vh;
  margin-top: 30px;
  h1 {
    font-size: 54px;
    margin: 0 25px 0 0;
    text-align: right;
  }
  hr {
    width: 90%;
  }
`;

class MessageBoard extends Component {
  state = {
    messages: ["I love you, Katie!", "so so so so so much"],
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
