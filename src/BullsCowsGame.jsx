import React, { useState } from 'react';

const generateSecretNumber = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secret = '';
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    secret += numbers[index];
    numbers.splice(index, 1);
  }
  return secret;
};

const BullsCowsGame = () => {
  //Create the following variables using useState:
  // secret, attempts
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [secret, setSecret] = useState(generateSecretNumber());
  const [attempts, setAttempts] = useState(0);
  const[bulls, setBulls]  = useState(0);
  const[cows, setcows]  = useState(0);


  const handleGuessChange = (event) => {
    setGuess(event.target.value)
    //Put the guess from the user into the corresponding variable.
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
      alert('Please enter a 4-digit number.');
      return;
    }
    setBulls(0);
    setcows(0);
    let newsecret= secret;
    let newguess = guess;
    for(let i = 0; i < 4; i++)
    {     
      for(let j = 0; j < 4; j++)
      {
        if(i == j)
          {if(newguess[i] == newsecret[i])
            {setBulls(bulls+1);
             newsecret = newsecret.replace(newsecret.charAt(i), '0')
             newguess = newguess.replace(newguess.charAt(i), '0')
            }
          }
        else 
         if(newguess[i] == newsecret[j])
          {setcows(cows+1)
           newsecret = newsecret.replace(newsecret.charAt(i), '0')
           newguess = newguess.replace(newguess.charAt(i), '0')
          }
      }

    }
    //create normal variables for numbering bulls and cows, reset them.
   
     //Check the guess entered by the user.
     // If he entered a digit that is the same as the digit that is in the same position in the random number, his bolus number increases,
     // If the guess he entered contains one of the digits in the random number, his number of hits increases.
     //If he has 4 balls, notify the user using the result variable.

     //Initialize the guess variable at the end of the function.
     //increase by 1 the number of guesses. 
     setGuess('');
     setAttempts(attempts+1);
  };

  const handleRestart = () => {
    setGuess('');
    setResult('');
    setSecret(generateSecretNumber());
    setAttempts(0);
      //Initialize all variables.
  };

  return (
    <div>
      <h1>Bulls and Cows Game</h1>
      <p>Attempts:{attempts}</p> 
      <p>{secret}</p>
      <p>{result}</p>
      <p>b:{bulls}</p>
      <p>p:{cows}</p>

      <form onSubmit={handleGuessSubmit}>
        <input type="text" value={guess} onChange={handleGuessChange} />
        <button type="submit">Guess</button>
      </form>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default BullsCowsGame;
