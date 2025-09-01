import React from 'react';
import { Banner } from './Banner';

function HappyBanner({ noOfGuesses }) {
  return (
    <Banner className="happy" >
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{noOfGuesses} guesses</strong>.
    </Banner>
  );
}

export default HappyBanner;