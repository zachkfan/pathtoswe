import React from "react";
import Image from "next/image";
import HomeNavLink from "./home_nav_links";

const home_nav = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <Image
          className="hidden md:flex"
          src={"/black_logo.png"}
          alt={"Logo"}
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="flex-none text-white">
        <ul className="menu menu-horizontal px-1 text-2xl hidden md:flex">
          <HomeNavLink
            title={"Search Interships"}
            href={"/search"}
          ></HomeNavLink>
          <HomeNavLink title={"Dashboard"} href={"/dashboard"}></HomeNavLink>
          <HomeNavLink title={"Your Account"} href={"/account"}></HomeNavLink>
          <HomeNavLink title={"Log In"} href={"/sign_in"}></HomeNavLink>
        </ul>
      </div>
    </div>
  );
};

export default home_nav;
