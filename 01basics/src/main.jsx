import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


const anotherElement = (
  <a href="https://www.google.com" target="_blank">Googledbjwe</a>
)
// const newLearner = {
//   name: 'John',
//   age: 25,
//   country: 'USA',
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {anotherElement}
    {/* newLearner: {newLearner.name} {newLearner.age} {newLearner.country} */}
  </StrictMode>,
)
