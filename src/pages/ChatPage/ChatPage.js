// import { config } from "dotenv";
// config();
import { useState, useEffect } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import readline from "readline";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./ChatPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const chatKey = "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";
const ChatPage = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "What are the three most recent shows you have watched?",
      sender: "ChatGPT",
    },
  ]);

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: chatKey,
    })
  );

  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello ChatGPT" }],
    })
    .then((res) => {
      console.log(res.data.choices[0].message.content);
    })
    .catch((err) => {
      console.error(err);
    });

  const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  userInterface.prompt();
  userInterface.on("line", async (input) => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });
    console.log(res.data.choices[0].message.content);
    userInterface.prompt();
  });

  // useEffect(() => {
  //   const fetchEngines = async () => {
  //     const configuration = new Configuration({
  //       organization: "org-Cy51ALBHr7gC4LmhLeb3JfdT",
  //       apiKey: chatKey,
  //     });
  //     const openai = new OpenAIApi(configuration);
  //     const response = await openai.listEngines();
  //     console.log(response);
  //   };

  //   fetchEngines();
  // }, []);

  // const handleSend = async (message) => {
  //   const newMessage = {
  //     message: message,
  //     sender: "user",
  //   };

  //   const newMessages = [...messages, newMessage];
  //   setMessages(newMessages);
  //   setTyping(true);
  //   await processMessageToChatGPT(newMessages);
  // };

  // async function processMessageToChatGPT(chatMessages) {
  //   let apiMessages = chatMessages.map((messageObject) => {
  //     let role = "";
  //     if (messageObject.sender === "ChatGPT") {
  //       role = "assistant";
  //     } else {
  //       role = "user";
  //     }
  //     return { role: role, content: messageObject.message };
  //   });

  //   const systemMessage = {
  //     role: "system",
  //     content: "Explain in an enthusiastic manner ", // specify how you want chat to respond
  //   };
  //   const apiRequestBody = {
  //     model: "davinci-codex",
  //     prompt: {
  //       text: [...apiMessages, systemMessage]
  //         .map(({ content, role }) => `${role}: ${content}`)
  //         .join("\n"),
  //     },
  //     temperature: 0.7,
  //     max_tokens: 1500,
  //     top_p: 1,
  //     frequency_penalty: 0,
  //     presence_penalty: 0,
  //   };
  //   try {
  //     const response = await axios.post(
  //       "https://api.openai.com/v1/engines/davinci-codex/completions",
  //       apiRequestBody,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + chatKey,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = response.data;
  //     setMessages([
  //       ...chatMessages,
  //       {
  //         message: data.choices[0].text,
  //         sender: "ChatGPT",
  //       },
  //     ]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setTyping(false);
  // }
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
            <ChatContainer className="chat-container">
              <MessageList
                className="message-list"
                scrollBehavior="smooth"
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="ChatGPT is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                // onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
