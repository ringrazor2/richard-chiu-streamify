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

const ChatBot = ({ messages, setMessages, setChatInput }) => {
  const [typing, setTyping] = useState(false);

  const configuration = new Configuration({
    organization: process.env.REACT_APP_OPENAI_ORG,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleSendMessage = async (message) => {
    setTyping(true);
    const userMessage = {
      role: "user",
      content:
        "Recommend me one show with no quotes or periods based off what I am about to say, your answer should only be the show title and nothing else " +
        message,
    };

    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo-0301",
        messages: [userMessage],
      })
      .then((res) => {
        setTyping(false);

        const botMessage = res.data.choices[0].message.content;

        let cleanBotMessage = botMessage;

        if (botMessage.includes('"')) {
          cleanBotMessage = botMessage.replace(/"/g, "");
        }
        if (botMessage.includes(".")) {
          cleanBotMessage = botMessage.replace(/\./g, "");
        }

        setChatInput(cleanBotMessage);
        setMessages([
          ...messages,
          { message: message, sender: "user" },
          { message: cleanBotMessage, sender: "ChatGPT" },
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="chat-page-chatBot">
      <MainContainer>
        <ChatContainer className="chat-container">
          <MessageList className="message-list" scrollBehavior="smooth">
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
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
