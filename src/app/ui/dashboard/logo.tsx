import Image from 'next/image'

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none"
    >  
      <Image 
        src="/big_white_logo.png"
        width={100}
        height={100}
        alt="PathToSWE Logo"
        className="h-12 w-12 rounded-md"
      />
    </div>
  );
}