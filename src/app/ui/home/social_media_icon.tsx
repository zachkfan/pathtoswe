"use client";

import Image from "next/image";

interface Props {
  image: string;
  imageAlt: string;
  href: string;
}

const social_media_icon = ({ image, imageAlt, href }: Props) => {
  return (
    <a href={href} target="_blank">
      <Image
        src={image}
        alt={imageAlt}
        width={32}
        height={32}
        style={{ borderRadius: "7px" }}
      ></Image>
    </a>
  );
};

export default social_media_icon;
