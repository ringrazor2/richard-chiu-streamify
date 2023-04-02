import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./ChatBot.scss";

// const chatKey = "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";

const ChatBot = ({ messages, setMessages }) => {
  const [typing, setTyping] = useState(false);
  const [clearMessages, setClearMessages] = useState(false);

  const configuration = new Configuration({
    // organization: "org-Cy51ALBHr7gC4LmhLeb3JfdT",
    organization: process.env.REACT_APP_OPENAI_ORG,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    // apiKey: chatKey,
  });

  const openai = new OpenAIApi(configuration);

  const handleSendMessage = async (message) => {
    setTyping(true);
    const userMessage = { role: "user", content: message };

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        // prompt:
        //   "I am going to give you three recent shows I watched and I want you to recommend me one show to watch",
        messages: [userMessage],
      })
      .then((res) => {
        setTyping(false);
        const botMessage = res.data.choices[0].message.content;
        console.log(botMessage);
        setMessages([
          ...messages,
          { message: message, sender: "user" },
          { message: botMessage, sender: "ChatGPT" },
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClearMessages = () => {
    setClearMessages(!clearMessages);
    setMessages([]);
  };

  return (
    <div className="chat-page-chatBot">
      <MainContainer>
        <ChatContainer className="chat-container">
          <MessageList className="message-list" scrollBehavior="smooth">
            {messages.map((message, i) => {
              return (
                <Message
                  key={i}
                  model={message}
                  className={
                    message.sender === "user" ? "user-message" : "bot-message"
                  }
                />
              );
            })}
            {typing ? <TypingIndicator content="ChatGPT is typing" /> : null}
            {messages.length > 0 ? (
              <p className="clear-button" onClick={handleClearMessages}>
                Clear
              </p>
            ) : null}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSendMessage}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBot;
