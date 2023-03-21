import { useState } from "react";
import "./ChatPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      message: "What are the three most recent shows you have watched?",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = (message) => {
    const newMessage = {
      message: message,
      sender: "user",
    };

    const newMessages = { ...messages, newMessage };
    setMessages(newMessages);
  };
  return (
    <div className="chat-page">
      <NavBar />
      <div className="chat-page-container">
        <div className="chat-page__message-container">
          <h1 className="chat-page__message">Don't know what to watch?</h1>
          <h1 className="chat-page__message">We got you!</h1>
        </div>
        <div className="chat-page-chatBot">
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
