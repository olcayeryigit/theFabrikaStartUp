import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">

        <div className='relative w-24 h-24'>
             <Image src="/images/logo/logo.svg" alt='Logo' fill className='object-contain' />
        </div>
    
    </div>
  );
};

export default Logo;
