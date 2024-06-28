import Image from 'next/image'

export default function Logo() {
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