import React from 'react';
import Link from 'next/link'

interface Props {
    login: string;
    link: string;
    member: string;
}

const sign_link = ({
    login,
    link,
    member,
}: Props) => {
    return (
        <div className="flex flex-row items-center justify-center pt-4">
            <p className="mr-1">{member}</p>
            <Link href={link} className="underline font=bold">{login}</Link>
        </div>
    );
};

export default sign_link