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
import "./ChatPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const chatKey = "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";

const ChatPage = () => {
  const [typing, setTyping] = useState(false);
  const [clearMessages, setClearMessages] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Tell me what kind of show you are looking for!",
      sender: "ChatGPT",
    },
  ]);

  const configuration = new Configuration({
    organization: "org-Cy51ALBHr7gC4LmhLeb3JfdT",
    apiKey: chatKey,
  });

  const openai = new OpenAIApi(configuration);

  const handleSendMessage = async (message) => {
    setTyping(true);
    const userMessage = { role: "user", content: message };
    // const recentShowsMessage = {
    //   role: "user",
    //   content: "I recently watched show1, show2, and show3.",
    // };
    openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
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
    <div className="chat-page">
      <NavBar />
      <div className="chat-page-container">
        <div className="chat-page-left">
          <div className="chat-page__message-container">
            <h1 className="chat-page__message">Don't know what to watch?</h1>
            <h1 className="chat-page__message">We got you!</h1>
          </div>
          <div className="show-details-container"></div>
        </div>
        <div className="chat-page-chatBot">
          <MainContainer>
            <ChatContainer className="chat-container">
              <MessageList className="message-list" scrollBehavior="smooth">
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
                {typing ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSendMessage}
              />
              <button>
                onClick={handleClearMessages}
                Clear Messages
              </button>
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

//   userInterface.prompt();
//   userInterface.on("line", async (input) => {
//     const res = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: input }],
//     });
//     console.log(res.data.choices[0].message.content);
//     userInterface.prompt();
//   });

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
