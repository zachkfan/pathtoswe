"use client";

import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useEffect, useState} from 'react';
import clsx from 'clsx';

export default function ScrollButton() {
    const [isBottom, setIsBottom] = useState(false);
      
    const handleScroll = () => {
        const scrollTop = window.innerHeight + window.scrollY;
        const offsetHeight = document.documentElement.offsetHeight;
        // added magic number to compensate for not triggering bug on home page
        if (scrollTop >= offsetHeight - 1) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };
      
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button className={clsx("btn btn-circle fixed bottom-20 right-4 opacity-20", 
            {'motion-safe:animate-bounce': isBottom}
        )} onClick={()=> scrollTo({top: 0, left: 0, behavior: "smooth"})}>
            <ArrowUpIcon className="w-7 text-white" />
        </button>
    );
}