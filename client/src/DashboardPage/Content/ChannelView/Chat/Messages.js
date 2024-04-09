import React from "react";

const messages = [
  {
    author: "miya:",
    content: "Hello world",
    id: 1,
  },
  {
    author: "miya:",
    content: "Hello world",
    id: 2,
  },
  {
    author: "miya:",
    content: "Hello world",
    id: 3,
  },
  {
    author: "miya:",
    content: "Hello world",
    id: 4,
  },
];

const Message = ({ author, content }) => {
  return (
    <span className="chat-messages-message">
      <span style={{ fontWeight: "bold" }}>{author}</span>
      {content}
    </span>
  );
};

export const Messages = () => {
  return (
    <div className="chat-messages-container">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
};
