import React from 'react';

const ClickableText = ({ text, link }) => {
  const openLink = () => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  return (
    <span onClick={openLink} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}>
      {text}
    </span>
  );
};

export default ClickableText;
