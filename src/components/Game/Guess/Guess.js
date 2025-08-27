import React from "react";

function Guess() {
  const [word, setWord] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        if (word.trim().length !== 5) {
          setError(`Invalid guess: ${word}, Needs to be exactly 5 characters`);
          setSuccess("");
        } else {
          setError("");
          setSuccess(`You guessed: ${word}`);
          setWord("");
        }
      }}
    >
      <label for="guess-input">Enter guess:</label>
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
