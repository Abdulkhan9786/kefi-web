import React from 'react';


const ClickableImage = ({ imageUrl, link ,width, height}) => {
  const openLink = () => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  return (
    <div onClick={openLink} style={{ cursor: 'pointer' }}>
      <img src={imageUrl} alt="Clickable "  style={{ width, height }}/>
    </div>
  );
};

export default ClickableImage;
