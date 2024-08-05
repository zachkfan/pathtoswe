import Modal from "@/app/ui/modal";
import InfoModal from "@/app/ui/dashboard/info_modal";
import { parseDate } from "@/app/lib/utils";

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
      <div className="card-body w-[87%] flex flex-row justify-between items-start">
        <div className="flex flex-col gap-3 my-auto">
          <h4 className="text-sm lg:text-base">{company}</h4>
          <h3 className="card-title text-base lg:text-xl xl:text-2xl font-bold">
            {role}
          </h3>
          <h4 className="text-sm lg:text-base">{parseDate(dateApplied)}</h4>
        </div>
        <Modal
          btnClassName="card-actions btn-circle btn-ghost items-center justify-center btn-sm"
          btnContent={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 lg:size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </>
          }
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
