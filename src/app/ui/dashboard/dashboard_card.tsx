interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}

export default function DashboardCard({
  company,
  role,
  location,
  datePosted,
  dateApplied,
}: Props) {
  return (
    <div className="card w-52 h-52" style={{ backgroundColor: bgColor }}>
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
