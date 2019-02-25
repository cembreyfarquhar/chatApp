import React from "react";
import styled from "styled-components";
import Message from "./Message.js";

const MessagesContainer = styled.div`
  height: 75%;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: scroll;
`;
const Messages = ({ messages }) => {
  return (
    <MessagesContainer>
      
        {messages.map(message => (
          <Message message={message} />
        ))}
    </MessagesContainer>
  );
};

export default Messages;
