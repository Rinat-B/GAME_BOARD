// ArithmeticSequenceGame.js
import React, { useState, useEffect } from 'react';
import ArithmeticGameUI from './ArithmeticGameUI';

const ArithmeticSequenceGame = () => {
  const [sequence, setSequence] = useState([]);
  const [nextTerm, setNextTerm] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [gameEnded, setGameEnded] = useState(false);



//Write a useEffect that is performed only when the component rises,
// call the generateSequence function  useEffect(() 
  


  const generateSequence = () => {
    const initialTerm = Math.floor(Math.random() * 10);
    const commonDifference = Math.floor(Math.random() * 5) + 1;
    const newSequence = [];
    for (let i = 0; i < 5; i++) {
      newSequence.push(initialTerm + i * commonDifference);
    }
    const next = initialTerm + 5 * commonDifference;
    setSequence(newSequence);
    setNextTerm(next);
    setMessage('Enter the next term in the arithmetic sequence.');
  };
  useEffect(() => {
    generateSequence();
    
  }, []);
  const handleInputChange = (event) => {
    //Put the input into the appropriate variable
    const inputVal = event.target.value;
        setUserInput(inputVal);
    
  };

  const checkAnswer = () => {
    if (parseInt(userInput) === nextTerm) {
     //Notify the user that he succeeded in setting the message variable.
       //Initialize the user input.
       //Create another series.
       setMessage('Congratulations! You got the correct answer.');
       setUserInput('');
       setNextTerm(nextTerm + 1);
      
    
     
    } else {
     //Notify the user that failed in the message variable.
       //End the game
       setMessage('Oops! You failed. Game Over!');
            setGameEnded(true);
    }
  };

  return (
    <ArithmeticGameUI
    // Pass as props the variables: message, sequence, userInput, handleInputChange, checkAnswer
    message={message}
    sequence={[]}
    userInput={userInput}
    handleInputChange={handleInputChange}
    checkAnswer={checkAnswer}
    
    />
  );
};

export default ArithmeticSequenceGame;


