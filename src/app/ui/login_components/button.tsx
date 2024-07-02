import React from "react";

interface Props {
  login: string;
}

const Button = ({ login }: Props) => {
  return (
    <button
      type="submit"
      className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 h-12"
    >
      {login}
    </button>
  );
};

export default Button;
