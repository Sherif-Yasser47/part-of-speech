## Application Description

This is a system that enables end-users to practice a set of 10 randomly returned questions, each question is being displayed as a word and four choices of POS, and check if the answer is correct according to the word POS or not.

# The server-side is being developed using NodeJS and ExpressJS for maintaing a web server that serve client requests.

# The client-side is being developed using ReactJS, axios for sending http requests.

# The TestData.json file stored in the root directory will be considered the data (wordsList, scoresList) persistent storage.


## Install and Run the application

1) Server-Side App:
  At the root directory of the project Run `npm install` inorder to install all required modules for Backend.
  Then run `npm start` to launch the server side application.

  The port assigned to the app over the server could be passed as an environment variable or static 3001.

2) Client-Side App: 
   Change directory to `./client` and also Run `npm install` inorder to install all required modules for Frontend.

   Then run `npm start` to launch the React application in development mode.
   Open [http://localhost:3000] to view it in the browser.

## App Activity
 
1) Sending a GET request to the `/api/words` to get the list of 10 random words from wordsList where at least 1 adjective, 1 adverb, 1 noun, and 1 verb.

The server app is using Error Handler middleware to catch errors through req/res lifecycle and return back custom errors to client.

Also using fileReader middleware to read TestData json file, parse the data and attach it to req object through req.data . In order to be invoked before request handlers as to be available for further logic. 

2) Sending a POST request to the `/api/rank` with the the score in the req payload to calculate the student rank based on the count of below/less scores in the scoresList array and then dividing that count over the scoreList length multiply 100 and send back to the client as the student rank of this trial.

3) The student can repeat the activity again where will be navigated to the practice screen again.