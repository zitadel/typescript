import * as React from 'react';

const ProtocolIcons = () => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Container to hold both images with relative positioning */}
      <div className="relative flex justify-center items-center h-full">
        {/* Background image with icons surrounding */}
        <div className="relative z-10 flex justify-center items-center w-full h-full">
          <img 
            src="/protocol-icons/omniwot.png" 
            alt="Omniwot Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProtocolIcons; 