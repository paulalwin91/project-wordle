import React from "react";

function Guess({ guesses, setGuesses }) {
  const [word, setWord] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const NUM_GUESSES = 6;
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guesses.length >= NUM_GUESSES) {
          setError(`Max guesses reached`);
          setSuccess("");
        } else if (word.trim().length !== 5) {
          setError(`Invalid guess: ${word}, Needs to be exactly 5 characters`);
          setSuccess("");
        } else {
          setError("");
          setSuccess(`You guessed: ${word}`);
          setWord("");
          setGuesses([...guesses, word]);
        }
      }}
    >
      <label >Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        maxLength={5}
        onChange={(e) => {
          setSuccess("");
          setError("");
          const upper = e.target.value.toUpperCase();
          setWord(upper);
        }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}

export default Guess;
