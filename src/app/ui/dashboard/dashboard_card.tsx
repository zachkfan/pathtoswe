import Modal from "@/app/ui/modal";
import InfoModal from "@/app/ui/dashboard/info_modal";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  applicationDashboard: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
  item_id: number;
}

export default function DashboardCard({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
  item_id,
}: Props) {
  const getStatusColor = (): React.CSSProperties => {
    const statusColors: Record<string, string> = {
      Closed: "#FA5A7D",
      Pending: "#FF947A",
      Interviewed: "#BF83FF",
      Hired: "#3CD856",
    };
    return { backgroundColor: statusColors[status] };
  };
  return (
    <div
      className="card card-side bg-white w-96 lg:w-[35vw] min-h-fit xl:h-56 text-black drop-shadow-around m-4"
      key={item_id}
    >
      <figure>
        <div className="w-18 h-[100%]" style={getStatusColor()}></div>
      </figure>
      <div className="card-body mt-4">
        <h4>{company}</h4>
        <h3 className="card-title text-lg lg:text-xl xl:text-2xl font-bold">
          {role}
        </h3>
        <Modal
          btnClassName="card-actions btn btn-ghost items-center p-0 font-extrabold mt-2 w-fit font-xs"
          btnContent={"View Application"}
        >
          <InfoModal
            company={company}
            role={role}
            location={location}
            datePosted={datePosted}
            dateApplied={dateApplied}
            applicationDashboard={applicationDashboard}
            status={status}
          />
        </Modal>
      </div>
    </div>
  );
}
