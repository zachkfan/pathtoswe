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
      className="card card-side bg-white w-[47%] h-44 lg:h-52 xl:h-60 text-black drop-shadow-around my-2 lg:my-4"
      key={item_id}
    >
      <figure className="w-[13%]">
        <div className="w-full h-[100%]" style={getStatusColor()}></div>
      </figure>
      <div className="card-body w-[87%] mt-4 p-3 lg:p-6 xl:p-8">
        <h4 className="text-sm lg:text-base">{company}</h4>
        <h3 className="card-title text-base lg:text-xl xl:text-2xl font-bold">
          {role}
        </h3>
        <Modal
          btnClassName="card-actions btn btn-ghost items-center p-0 font-extrabold mt-auto w-fit text-xs xl:text-sm"
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
