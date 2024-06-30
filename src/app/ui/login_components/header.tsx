import React from 'react';

interface Props {
    title: string;
}

const Header = ({
    title,
}: Props) => {
    return (
        <h1 className="text-3xl pb-5 font-semibold text-center">{ title }</h1>
    );
};

export default Header