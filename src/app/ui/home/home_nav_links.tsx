"use client";
import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

const HomeNavLinks = ({ title, href }: Props) => {
  return (
    <li className="hover:bg-white hover:text-black-gray">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default HomeNavLinks;
