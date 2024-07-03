import Link from "next/link";
import Status from "@/app/ui/dashboard/status_tag";
import ButtonModal from "@/app/ui/btn_modal";
import EditModal from "@/app/ui/dashboard/edit_modal";

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
  return (
    <div className="p-2 flex flex-row justify-between">
      <div className="flex flex-col gap-2 items-start">
        <h4>{company}</h4>
        <h3 className="text-2xl font-bold">{role}</h3>
        <p>Location: {location}</p>
        <p>Date Posted: {datePosted}</p>
        <p>Date Applied: {dateApplied}</p>
        <p>
          Dashboard:{" "}
          {
            <a href={applicationDashboard} className="link link-primary">
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
      >
        <EditModal
          company={company}
          role={role}
          location={location}
          datePosted={datePosted}
          dateApplied={dateApplied}
          applicationDashboard={applicationDashboard}
          status={status}
        />
      </ButtonModal>
    </div>
  );
}
