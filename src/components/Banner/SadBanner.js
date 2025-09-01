import React from 'react';
import { Banner } from './Banner';

function SadBanner({ answer }) {
  return (
    <Banner className="sad">        
        Sorry, the correct answer is <strong>{answer}</strong>.      
    </Banner>
  );
}
export default SadBanner;