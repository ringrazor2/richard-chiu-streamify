Richard Chiu Capstone 2023 - Streamify

hosted on: https://richard-chiu-capstone-bs2023.web.app/

Application is designed for desktop use: Ideally 1400px - 2000px width. Use these dimensions for best user experience.

Streamify is a web application that helps users find where to watch movies and TV shows across multiple streaming platforms, including Netflix, Disney Plus, and Amazon Prime. It utilizes AI technology to provide new show recommendations through a chatbot prompt. Users can create an account to save their favourite movies and TV shows for quick access.

Getting Started
To get started with Streamify, follow these steps:

Clone the repository to your local machine.
Install the required dependencies by running npm install.
Obtain API keys and URLs according to the .env.sample.
Start the server by running npm start.
Once the server is running, you can access the application by visiting http://localhost:3000 in your web browser.

API keys Needed:

Firebase: https://console.firebase.google.com/u/0/
Create a new firebase project and initialize project with own keys in the firebase.js file.
Create new collection called “users” in Firestore.

Streaming Availability: https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability
Register for an account and get API key.
Use this API key in App.js and ChatPage.js.
Header Host will be specified in above link or: streaming-availability.p.rapidapi.com

OpenAi: https://platform.openai.com/docs/api-reference
Follow doc instructions to get API key and place key in required section of chatbot.js.
Obtain organization code and place in chatbot.js similar to key.

Streamify includes the following features:

Browse and search for movies and TV shows according to country
Create a watchlist of your favorite content
Generate a 3x3 and save to your account
Quick access to show directly from watchlist

Streamify was built using the following technologies:
React.js
Node.js
Firebase Authentication
Firebase Storage
