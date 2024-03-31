import React from 'react';

const Spacing = ({size = '16px'}) => {
  return (
    <div className='w-full' style={{height: size}}/>
  );
};

export default Spacing;