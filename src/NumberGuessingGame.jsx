import React, { useState } from 'react';

const generateSecretNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const NumberGuessingGame = () => {
   //Create the following variables using useState:
  // secret, attempts
  const [secret, setSecret] = useState(generateSecretNumber());
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const handleGuessChange = (event) => {
    //Put the guess from the user into the corresponding variable.
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      alert('Please enter a number between 1 and 100.');
      return;
    }
   // check if the number entered matches the random number ,
       // If it doesn't fit, check if it's bigger or smaller than it.
       //Notify the user using the result variable.
       //initialize the guess variable.
    if(secret == numGuess){
      setResult( 'The number matches')
      return;}
    else
      if(secret > numGuess){
        setResult ('The number chosen is greater' )
        return;}      
    else
      if(secret < numGuess){
        setResult('The selected number is smaller');
        return;}
    
    setSecret(generateSecretNumber());

  };

  const handleRestart = () => {
    //Initialize all variables.
  setSecret(generateSecretNumber());
  setAttempts(0);
  setGuess('');
  setResult('');

  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Attempts: </p>
      <p>{result}</p>
      <form onSubmit={handleGuessSubmit}>
        <input type="number" value={guess} onChange={handleGuessChange} />
        <button type="submit">Guess</button>
      </form>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default NumberGuessingGame;
