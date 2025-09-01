import React from 'react';
import { Banner } from './Banner';

function SadBanner({ answer }) {
  return (
    <Banner>
      <div className="sad">
        Sorry, the correct answer is <strong>{answer}</strong>.
      </div>
    </Banner>
  );
}
export default SadBanner;