import React from "react";
//NOT USED
interface Props {
  btnClassName: string;
  dropClassName: string;
  title: string;
  items: { content: string; onClick: () => void }[];
}

const Dropdown = ({ btnClassName, dropClassName, title, items }: Props) => {
  const sumClassName = "dropdown block" + { btnClassName };
  const sumDropClassName =
    "dropdown-content menu rounded-box z-[1] p-2 shadow" + { dropClassName };
  return (
    <div className={sumClassName}>
      <div tabIndex={0} role="button" className="bg-black-gray text-white">
        {title}
      </div>
      <ul tabIndex={0} className={sumDropClassName}>
        {items.map((item) => (
          <li>
            <a onClick={item.onClick}>{item.content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
