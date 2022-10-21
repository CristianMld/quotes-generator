import { useState } from 'react';
import './App.css'
import QuoteBox from './Components/QuoteBox';
import quotes from './quotes.json'

function App() {
  const quotesLength = quotes.length;
  const randomNumber = Math.floor(Math.random() * quotesLength);
  const [index, setIndex] = useState(randomNumber);
  const quote = quotes[index].quote;
  const author = quotes[index].author;

  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F",
   "#2425BA", "#BB009C", "#FB1A73", "#77699A", "#009EEB", "#67BAA6"] 
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}; 
  color: ${colors[randomColorIndex]} `;
  const color = colors[randomColorIndex];

  return (
    <div className="App">
      <QuoteBox 
      quote={quote}
      author={author}
      setIndex={setIndex}
      quotesLength={quotesLength}
      color={color}
      />
    </div>
  )
}

export default App