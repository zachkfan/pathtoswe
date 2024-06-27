import Image from 'next/image'
import { useContext } from 'react';
import { OpenContext } from '@/app/context/open-context'

export default function Logo() {
  const open = useContext(OpenContext);

  return (
    <div
      className="flex flex-row items-center leading-none"
    >  
      <Image 
        src="/big_white_logo.png"
        width={36}
        height={36}
        alt="PathToSWE Logo"
        className="w-[36px] h-[36px] rounded-md"
      />
    </div>
  );
}