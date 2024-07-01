import clsx from "clsx";

interface Props {
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
  icon: React.ComponentType;
  applicationCount: number;
  bgColor: string;
  iconBgColor: string;
}

export default function SortingCards({
  status,
  icon: Icon,
  applicationCount,
  bgColor,
  iconBgColor,
}: Props) {
  return (
    <div
      className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300 card w-52 h-52"
      style={{ backgroundColor: bgColor }}
    >
      <div className="card-body text-black gap-3">
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <div
            className={clsx(
              "stroke-white text-white",
              status === "Closed" ? "stroke-2 size-8" : "stroke-0 size-7"
            )}
          >
            <Icon />
          </div>
        </div>
        <h2 className="card-title font-extrabold text-2xl">{status}</h2>
        <p>{applicationCount} applications</p>
      </div>
    </div>
  );
}
