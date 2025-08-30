import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses, setGuesses, answer }) {
  const [word, setWord] = React.useState("");
  const [won, setWon] = React.useState(false);
  const [lost, setLost] = React.useState(false);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuesses([...guesses, word]);

        if (word === answer) {
          setWon(true);
          return
        }
        if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED && word !== answer) {
          setLost(true);
          return
        }
        setWord("");
      }}
    >
      <label>Enter guess:</label>
      {guesses.length < NUM_OF_GUESSES_ALLOWED && !won && !lost && (
        <>
          <input
            id="guess-input"
            type="text"
            value={word}
            maxLength={5}
            pattern="[A-Z]{5}"
            onChange={(e) => {
              const upper = e.target.value.toUpperCase();
              setWord(upper);
            }}
          />
        </>
      )}
      {won && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {lost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </form>
  );
}

export default Guess;
