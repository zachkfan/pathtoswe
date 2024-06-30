import React from 'react';

interface Props {
    login: string;
}

const GoogleBox = ({
    login,
}: Props) => {
    return (
        <div className="flex items-center justify-center">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 h-12 w-full">
                <img src="../google_logo.png" className="w-8 h-8 ml-1"></img>
                <span className="text-gray-700 font-semibold w-full mr-9">Sign {login} with Google</span>
            </button>
        </div>
    );
};

export default GoogleBox