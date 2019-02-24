import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  p {
    font-size: 55px;
  }
`;

const Message = ({ message }) => {
  return (
    <MessageContainer>
      <p>{message}</p>
    </MessageContainer>
  );
};

export default Message;
