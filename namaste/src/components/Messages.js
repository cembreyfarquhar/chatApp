import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
    height: 75%;
    padding: 10px 30px;
    p {
        font-size: 36px;
        text-align: left;
        line-height: 20px;
    }
`;
const Messages = ({ messages }) => {
  return (
    <MessagesContainer>
      {messages.map(message => (
        <p>{message}</p>
      ))}
    </MessagesContainer>
  );
};

export default Messages;
