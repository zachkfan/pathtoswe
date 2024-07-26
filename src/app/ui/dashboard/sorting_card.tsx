import clsx from "clsx";

interface Props {
  status: "All" | "Closed" | "Pending" | "Interviewed" | "Hired";
  icon: React.ComponentType;
  applicationCount: number;
  bgColor: string;
  iconBgColor: string;
  onClick: () => void;
  selected: boolean;
}

export default function SortingCards({
  status,
  icon: Icon,
  applicationCount,
  bgColor,
  iconBgColor,
  onClick,
  selected,
}: Props) {
  return (
    <div
      className={clsx(
        "shadow-md transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-[1.15] duration-300 card w-24 h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 flex justify-center",
        {
          "-translate-y-1 scale-[1.15] saturate-200 ": selected,
        }
      )}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="card-body text-black lg:gap-3 xl:p-7 lg:p-4 p-2">
        <div
          className="flex justify-center items-center w-6 h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <div
            className={clsx(
              "stroke-white text-white",
              status === "Closed"
                ? "stroke-2 size-6 xl:size-8"
                : "stroke-0 size-5 xl:size-7"
            )}
          >
            <Icon />
          </div>
        </div>
        <h2 className="card-title font-extrabold text-base lg:text-lg xl:text-2xl">
          {status}
        </h2>
        <p className="text-xs lg:text-sm xl:text-base">
          {applicationCount} applications
        </p>
      </div>
    </div>
  );
}
