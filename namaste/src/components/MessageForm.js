import React from "react";
import styled from "styled-components";

const MessageFormContainer = styled.div`
  width: 100%;
  height: 20%;
  form {
      width: 100%;
      height: 49%;
      input {
          width: 95%;
          margin: 0;
          padding: 0 2.5%;
          border-width: 2px 0;
          height: 100%;
          font-size: 36px;
      }
  }
`;

const MessageForm = ({ handleChange, handleSubmit, messageInput }) => {
  return (
    <MessageFormContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="messageInput" value={messageInput} />
      </form>
    </MessageFormContainer>
  );
};

export default MessageForm;
