import React from 'react';

const Divider = ({ color }) => {
  return (
    <div style={{  borderTop: `1px solid ${ color || '#ddd'}`, 
    margin: '10px 0' }}>
      {/* Adjust styles as needed */}
    </div>
  );
};

export default Divider;
