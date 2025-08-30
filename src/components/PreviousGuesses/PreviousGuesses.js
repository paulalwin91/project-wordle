import React from "react";

function PreviousGuesses({ guesses = [] }) {
  const default_guesses = 6;
  console.log(guesses)
  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <p className="guess" key={index}>
            {guess.split("").map((letter, i) => (
              <span className="cell" key={i}>
                {letter}
              </span>
            ))}
          </p>
        ))}
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
