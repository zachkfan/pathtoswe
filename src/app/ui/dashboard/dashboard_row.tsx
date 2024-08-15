"use client";

import Status from "./status_tag";
import InfoModal from "@/app/ui/dashboard/info_modal";
import { useRef, useState, useEffect } from "react";
import LocationDropdown from "@/app/ui/location_dropdown";

export type statusType = "Closed" | "Pending" | "Interviewed" | "Hired";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted?: string;
  dateApplied: string;
  applicationDashboard?: string;
  status: statusType;
  item_id: number;
}

const DashboardRow = ({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
  item_id,
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
        className="h-14 text-base hover:cursor-pointer hover:bg-concrete-gray transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={toggleModal}
        key={item_id}
      >
        <td>{company}</td>
        <td>{role}</td>
        <td>
          <LocationDropdown location={location} format={"dashboard row"} />
        </td>
        <td>{datePosted?.substring(0, 10)}</td>
        <td>{dateApplied.substring(0, 10)}</td>
        <td>
          <Status status={status} />
        </td>
      </tr>
      {isOpen && (
        <dialog ref={modalRef} className="modal">
          <div className="modal-box bg-white justify-start items-center p-6 text-base font-normal">
            <InfoModal
              company={company}
              role={role}
              location={location}
              datePosted={datePosted}
              dateApplied={dateApplied}
              applicationDashboard={applicationDashboard}
              status={status}
              item_id={item_id}
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
