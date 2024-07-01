import React from "react";
import Image from "next/image";

const hide_button = () => {
  return (
    <Image
      src={"/save.svg"}
      alt={"Save Button"}
      height={24}
      width={24}
      className="hidden lg:block"
    ></Image>
  );
};

export default hide_button;
