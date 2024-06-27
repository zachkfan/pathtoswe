"use client";

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Logo from '@/app/ui/dashboard/logo';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import {useState} from 'react';
import clsx from 'clsx';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx("w-full flex-none",
      {
        'md:w-24': !isOpen,
        'md:w-64': isOpen,
      },
    )}>
      <div className={"flex h-full flex-col px-3 py-4 md:px-2 bg-black-gray  text-white"}>
        <Link
          className="mb-8 flex h-20 items-center justify-start rounded-md p-4"
          href="/"
        > 
          <Logo />
          <h2 className={clsx("ml-3 grow font-serif hidden",
            {
            'md:block': isOpen,
            }
          )}>PathToSWE</h2>
        </Link>
        <button className="btn btn-circle bg-white" onClick={() => toggleSidebar()}></button>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          <form>
            <button className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-concrete-gray hover:text-black-gray md:flex-none md:justify-start md:p-2 md:px-3">
              <ArrowRightStartOnRectangleIcon className="w-6" />
              <div className={clsx("hidden", 
                {'md:block': isOpen}
              )}>Sign Out</div> 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}