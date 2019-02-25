import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  div {
    font-size: 46px;
    margin: 5px 0;
    text-align: left;
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #eeeeee;
    padding: 10px 16px;
    max-width: 65%;
  }
`;

const Message = ({ message }) => {
  return (
    <MessageContainer>
      <div>{message}</div>
    </MessageContainer>
  );
};

export default Message;
