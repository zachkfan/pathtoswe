import React from "react";

interface Props {
  name: string;
  title: string;
  icon: React.ComponentType;
  inputType: string;
}

const text_box = ({ name, title, icon: Icon, inputType }: Props) => {
  return (
    <>
      <div className="mb-4">
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <div className="w-5 h-5">
            <Icon />
          </div>
          <input
            type={inputType}
            className="bg-white mt-1 w-full px-3 py-2rounded-md shadow-sm"
            placeholder={title}
            name={name}
            required
          />
        </label>
      </div>
    </>
  );
};

export default text_box;
