import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import './Loader.module.css';

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Hourglass
        visible={true}
        height="40"
        width="40"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        z-index="1000"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
};
