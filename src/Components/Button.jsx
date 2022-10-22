const Button = ({setIndex, quotesLength, color}) => {
  const change = () => {
    const secondRandom = Math.floor(Math.random() * quotesLength);
    setIndex(secondRandom);
  }

  return (
    <div>
      <button style={{background: color}} onClick={change}><i className="fa-solid fa-shuffle"></i></button>      
    </div>
  );
};
export default Button;