import React from 'react'
import Image from 'next/image'
import HomeNavLink from './home_nav_links'

const home_nav = () => {
  return (
    <div className="navbar bg-transparent">
  <div className="flex-1">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-concrete-gray rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <HomeNavLink title={"Search Interships"} href={"/dashboard/search"}></HomeNavLink>
      <HomeNavLink title={"Dashboard"} href={"/dashboard"}></HomeNavLink>
      <HomeNavLink title={"Your Account"} href={"/dashboard/account"}></HomeNavLink>
      <HomeNavLink title={"Log In"} href={"/"}></HomeNavLink>
      </ul>
    </div>
    <Image className= "hidden md:flex"src={"/black_logo.png"} alt={"Logo"} width={100} height={100}>
    </Image>
  </div>
  <div className="flex-none text-white">
    <ul className="menu menu-horizontal px-1 text-2xl hidden md:flex">
      <HomeNavLink title={"Search Interships"} href={"/dashboard/search"}></HomeNavLink>
      <HomeNavLink title={"Dashboard"} href={"/dashboard"}></HomeNavLink>
      <HomeNavLink title={"Your Account"} href={"/dashboard/account"}></HomeNavLink>
      <HomeNavLink title={"Log In"} href={"/"}></HomeNavLink>
    </ul>
  </div>
</div>
  )
}

export default home_nav