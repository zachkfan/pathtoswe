"use client";

import Status from "./status_tag";
import InfoModal from "@/app/ui/dashboard/info_modal";
import { useRef, useState, useEffect } from "react";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  applicationDashboard: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}

const DashboardRow = ({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [isOpen]);

  return (
    <>
      <tr
        className="hover:cursor-pointer hover:bg-concrete-gray transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={toggleModal}
      >
        <td>{company}</td>
        <td>{role}</td>
        <td>{location}</td>
        <td>{datePosted}</td>
        <td>{dateApplied}</td>
        <td>
          <Status status={status} />
        </td>
      </tr>
      {/* TODO: fix expand animation when opening modal */}
      {isOpen && (
        <dialog ref={modalRef} className="modal">
          <div className="modal-box bg-white justify-start items-center p-6 text-base">
            <InfoModal
              company={company}
              role={role}
              location={location}
              datePosted={datePosted}
              dateApplied={dateApplied}
              applicationDashboard={applicationDashboard}
              status={status}
            />
          </div>
          <form
            method="dialog"
            className="modal-backdrop"
            onClick={toggleModal}
          >
            <button>close</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default DashboardRow;
