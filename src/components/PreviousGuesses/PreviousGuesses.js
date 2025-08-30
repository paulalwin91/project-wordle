import React from 'react';

function PreviousGuesses({ guesses=[] }) {
  return <div>
    <h2>Previous Guesses</h2>
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>{guess}</p>
      ))}
    </div>
  </div>;
}

export default PreviousGuesses;
