import React from 'react';
import { Banner } from './Banner';

function HappyBanner({ noOfGuesses }) {
  return (

    <Banner>
      <div className="happy">
        <strong>Congratulations!</strong> Got it in
        <strong>{noOfGuesses} guesses</strong>.
      </div>
    </Banner>
  );
}

export default HappyBanner;