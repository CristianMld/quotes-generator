
const QuoteBox = ({quote, author, setIndex, quotesLength, color}) => {
  const change = () => {
    const secondRandom = Math.floor(Math.random() * quotesLength);
    setIndex(secondRandom);
  }

  return (
    <div className="card">
      <h3><i className="fa-sharp fa-solid fa-quote-left"></i> {quote} {" "} 
      <i className="fa-sharp fa-solid fa-quote-right"></i></h3>
      <h4>- {author}</h4>
      <button style={{background: color}} onClick={change}><i className="fa-solid fa-shuffle"></i></button>
    </div>
  );
};

export default QuoteBox;