import Button from "./Button";

const QuoteBox = ({quote, author, setIndex, quotesLength, color}) => {
  

  return (
    <div className="card">
      <h3><i className="fa-sharp fa-solid fa-quote-left"></i> {quote} {" "} 
      <i className="fa-sharp fa-solid fa-quote-right"></i></h3>
      <h4>- {author}</h4>
      <Button 
      setIndex={setIndex}
      quotesLength={quotesLength}
      color={color}
      />
    </div>
  );
};

export default QuoteBox;