# ReactNotes
Simple to-do list app.

## Join the fun
```bash
git clone https://github.com/brineryte/reactnotes.git
cd reactnotes
```
If you're cool... `code .` Otherwise, use your editor of choice. <br/>

### Set up Firebase
Go to [Firebase Console](https://console.firebase.google.com/) and create a new project. Copy your config settings from there. They look something like this: 
```js
var config = {
    apiKey: "dfgdfgfdgfdgdgfdg",
    authDomain: "reactnotes-01001.firebaseapp.com",
    databaseURL: "https://reactnotes-01001.firebaseio.com",
    projectId: "reactnotes-01001",
    storageBucket: "reactnotes-01001.appspot.com",
    messagingSenderId: "89032818903"
  };
```

Navigate to `src/Config/your_config.js` And paste _your_ config settings there, following the instructions in the comments of that file.

```js
// Initialize Firebase
  export const DB_CONFIG = {
    // Add your firebase config settings here and rename this file to config.js
  };
```
Head back into the project's directory in your terminal
```bash
npm start
```
Navigate to localhost:3000

## Todo
1. Implement update operation to edit notes.
2. ~Detect URL's and treat them as anchor elements.~
3. ~Enable submission of new notes by pressing [Enter]~
4. Implement firebase user authentication

## Credit
This is based on the tutorial by [@wesdoyle](https://github.com/wesdoyle).<br/>
Check it out [here](https://www.youtube.com/watch?v=-RtJroTMDf4)!

## Other Info
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
