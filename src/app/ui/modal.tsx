"use client";

import { useRef } from "react";

// btnClassName: used to style the button user clicks to open the modal
// btnContent: content within the button e.g. View Applicaiton Text
// children: content within the modal e.g. Application Details
interface Props {
  btnClassName: string;
  btnContent: React.ReactNode;
  children: React.ReactNode;
}

export default function Modal({ btnClassName, btnContent, children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className={btnClassName}
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        {btnContent}
      </button>
      <dialog ref={modalRef} className="transition-none modal">
        <div className="modal-box bg-white">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
