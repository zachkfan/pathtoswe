import React from "react";
import Image from "next/image";
import Link from "next/link";

const CornerLogo = () => {
  return (
    <div className="absolute top-0 left-0 p-2 w-32 h-32">
      <Link href="/">
        <Image
          src="/black_gray_logo.png"
          alt="Logo of Path of SWE"
          width={100}
          height={100}
        ></Image>
      </Link>
    </div>
  );
};

export default CornerLogo;
