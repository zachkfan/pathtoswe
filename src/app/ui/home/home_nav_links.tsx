'use client'
import React from 'react'
import Link from 'next/link';

interface Props {
    title: string;
    href: string;
}

const home_nav_links = ({title, href}: Props) => {
return(
    <li>
    <Link href={href}>
    {title}
    </Link>
    </li>
)
}


export default home_nav_links