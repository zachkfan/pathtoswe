import React from 'react';

interface Props {
    title: string;
}

const text_box = ({
    title,
}: Props) => {
    return (
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">{ title }</label>
            <input type="text" className="bg-white mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        </div>
    );
};

export default text_box