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
  status,
}: Props) {
  const color = () => {
    switch (status) {
      case "Closed":
        return {
          backgroundColor: "#FA5A7D",
        };
      case "Pending":
        return { backgroundColor: "#FF947A" };
      case "Interviewed":
        return { backgroundColor: "#BF83FF" };
      case "Hired":
        return { backgroundColor: "#3CD856" };
    }
  };
  return (
    <div className="card card-side bg-white w-[45%] text-black drop-shadow-around">
      <figure>
        <div className="w-18 h-52" style={color()}></div>
      </figure>
      <div className="card-body mt-4">
        <h4>{company}</h4>
        <h3 className="card-title text-2xl font-bold">{role}</h3>
        <button className="card-actions btn btn-ghost items-center p-0 font-extrabold mt-2 w-fit">
          View Application
        </button>
      </div>
    </div>
  );
}
