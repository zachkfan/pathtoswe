import Status from "@/app/ui/dashboard/status_tag";
import ButtonModal from "@/app/ui/btn_modal";
import EditModal from "@/app/ui/dashboard/edit_modal";
import { parseLocation } from "@/app/lib/utils";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  applicationDashboard: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}

export default function ModalContent({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
}: Props) {
  const parsedLocation = parseLocation(location);
  const semicolonLocation = parsedLocation.join("; ");

  return (
    <div className="flex flex-row justify-between">
      <div className="p-2 flex flex-col gap-3 items-start text-start">
        <h4>{company}</h4>
        <h3 className="text-2xl font-bold">{role}</h3>
        <p>Location: {semicolonLocation}</p>
        <p>Date Posted: {datePosted.substring(0, 10)}</p>
        <p>Date Applied: {dateApplied.substring(0, 10)}</p>
        <p>
          Dashboard:{" "}
          {
            <a
              href={applicationDashboard}
              target="_blank"
              className="link link-primary"
            >
              {applicationDashboard}
            </a>
          }
        </p>
        <p>
          Status: <Status status={status} />
        </p>
      </div>
      <ButtonModal
        btnClassName="btn btn-sm btn-ghost bg-gray-200 border-none text-black font-bold hover:bg-gray-200/80 h-10 px-4"
        btnContent={"Edit"}
        closeBtnClassName="btn btn-sm bg-black border-none text-black font-bold hover:bg-black/80 h-10 px-4 text-white"
        closeBtnContent={"Done"}
        end={false}
      >
        <EditModal
          company={company}
          role={role}
          location={semicolonLocation}
          datePosted={datePosted.substring(0, 10)}
          dateApplied={dateApplied.substring(0, 10)}
          applicationDashboard={applicationDashboard}
          status={status}
          type={"Edit"}
        />
      </ButtonModal>
    </div>
  );
}
