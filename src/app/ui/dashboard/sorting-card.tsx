interface Props {
  status: string;
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
    <div className="card w-52 h-52" style={{ backgroundColor: bgColor }}>
      <div className="card-body text-black gap-3">
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <div className="size-8 stroke-white text-white stroke-2">
            <Icon />
          </div>
        </div>
        <h2 className="card-title font-extrabold text-2xl">{status}</h2>
        <p>{applicationCount} applications</p>
      </div>
    </div>
  );
}
