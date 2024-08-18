import Status from "@/app/ui/dashboard/status_tag";
import ButtonModal from "@/app/ui/btn_modal";
import EditModal from "@/app/ui/dashboard/edit_modal";
import { parseLocation } from "@/app/lib/utils";

interface Props {
  company: string;
  role: string;
  location: string | null;
  datePosted?: string;
  dateApplied: string;
  applicationDashboard?: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
  item_id: number;
}

export default function ModalContent({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
  item_id,
}: Props) {
  let semicolonLocation: string;

  if (location !== null) {
    const parsedLocation: string[] = parseLocation(location);
    semicolonLocation = parsedLocation.join("; ");
  } else {
    semicolonLocation = "N/A";
  }

  return (
    <div className="flex flex-row justify-between">
      {/* TODO: Add date picker */}
      <div className="p-2 flex flex-col gap-3 items-start text-start">
        <h4>{company}</h4>
        <h3 className="text-2xl font-bold">{role}</h3>
        <p className="flex justify-between w-full">
          <span className="font-semibold">Location:</span> {semicolonLocation}
        </p>
        <p className="flex justify-between w-full">
          <span className="font-semibold">Date Posted:</span>{" "}
          {datePosted?.substring(0, 10) ?? "N/A"}
        </p>
        <p className="flex justify-between w-full">
          <span className="font-semibold">Date Applied:</span>{" "}
          {dateApplied.substring(0, 10) || "N/A"}
        </p>
        <p className="flex justify-between w-full">
          <span className="font-semibold">Dashboard:</span>{" "}
          {applicationDashboard ? (
            <a
              href={applicationDashboard}
              target="_blank"
              className="link link-primary"
            >
              {applicationDashboard}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p className="flex justify-between w-full">
          <span className="font-semibold">Status:</span>{" "}
          <Status status={status} />
        </p>
      </div>
      <ButtonModal
        btnClassName="btn btn-sm btn-ghost bg-gray-200 border-none text-black font-bold hover:bg-gray-200/80 h-10 px-4"
        btnContent={"Edit"}
        closeBtnClassName="text-black font-bold px-2"
        closeBtnContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        }
        end={false}
      >
        <EditModal
          company={company}
          role={role}
          location={semicolonLocation}
          datePosted={datePosted?.substring(0, 10)}
          dateApplied={dateApplied.substring(0, 10)}
          applicationDashboard={applicationDashboard}
          status={status}
          type={"Edit"}
          item_id={item_id}
        />
      </ButtonModal>
    </div>
  );
}
