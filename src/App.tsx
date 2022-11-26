import React, {FC, useEffect, useState} from 'react';

const App:FC = () => {
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const randomQuote = async () => {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        return setText(data.slip.advice)
      })
  }

  useEffect(() => {
    randomQuote()
  },[])

  return (
    <div className="App">
      <div className="App-block">
        <div className="App-block__text">{text}</div>
        <button className="App-block__btn" onClick={randomQuote}>{isLoading ? 'Loading...' : 'give me advice'}</button>
      </div>
    </div>
  );
}

export default App;
