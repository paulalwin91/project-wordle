import React from "react";
import { checkGuess } from "../../game-helpers";

function PreviousGuesses({ guesses = [], answer }) {
  const default_guesses = 6;
  console.log(guesses)
  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => {
          const validatedGuess = checkGuess(guess, answer)
         return (
           <p className="guess" key={index}>
             {validatedGuess.map((vg, i) => (
               <span className={`cell ${vg.status}`} key={i}>
                 {vg.letter}
               </span>
             ))}
           </p>
         )
       })}
        {
        Array.from({ length: default_guesses - guesses.length }).map(
          (_, idx) => (
            <p className="guess" key={`empty-${idx}`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span className="cell" key={i}></span>
              ))}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default PreviousGuesses;
