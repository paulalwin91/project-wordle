import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess/Guess';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import Restart from '../Restart/Restart';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);
  const [lost, setLost] = React.useState(false);


  return (
    <>
      <Restart won={won} lost={lost} onRestart={() => {
        setGuesses([]);
        setWon(false);
        setLost(false);
        
      }} />
      <PreviousGuesses guesses={guesses} answer={answer} />
      <Guess guesses={guesses} setGuesses={setGuesses}  answer={answer} won={won} lost={lost} setWon={setWon} setLost={setLost}   />      
    </>
  );
}

export default Game;
