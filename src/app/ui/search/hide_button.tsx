import React from "react";
import Image from "next/image";

const hide_button = () => {
  return (
    <Image src={"/hide.svg"} alt={"Hide Button"} height={24} width={24}></Image>
  );
};

export default hide_button;
