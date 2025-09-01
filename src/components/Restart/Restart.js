import React from 'react';

function Restart({won, lost, onRestart}) {
  return <div>
    {(won || lost) && (
      <input type="button" value="Restart" onClick={onRestart} />
    )}
  </div>;
}

export default Restart;
