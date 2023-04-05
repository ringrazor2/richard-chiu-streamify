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

const ChatBot = ({ messages, setMessages, setChatInput, chatInput }) => {
  const [typing, setTyping] = useState(false);
  const [clearMessages, setClearMessages] = useState(false);

  const configuration = new Configuration({
    organization: process.env.REACT_APP_OPENAI_ORG,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleSendMessage = async (message) => {
    setTyping(true);
    const userMessage = { role: "user", content: message };

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo-0301",
        // prompt: `Please suggest one show recommendation to the user based off the user input`,
        // maxTokens: 15,
        messages: [userMessage],
      })
      .then((res) => {
        setTyping(false);
        const botMessage = res.data.choices[0].message.content;
        console.log(botMessage);
        setChatInput(botMessage);
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
              <button className="clear-button" onClick={handleClearMessages}>
                Clear
              </button>
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
