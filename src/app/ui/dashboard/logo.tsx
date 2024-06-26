import Image from 'next/image'

export default function Logo() {
  return (
    <div
      className="flex flex-row items-center leading-none"
    >  
      <Image 
        src="@/public/black_logo.png"
        width={auto}
        height={auto}
        alt="PathToSWE Logo"
        style={"h-12 w-12"}
      />
    </div>
  );
}