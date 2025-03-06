import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   childern: "Click me to go to google",
// };

const anotherUser = "tusharsingh"

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: "_blank" },
  'click me to go on google',
  anotherUser
)

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit google</a>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  reactElement
  // anotherElement
)