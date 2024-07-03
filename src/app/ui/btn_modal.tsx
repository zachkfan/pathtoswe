"use client";

import { useRef } from "react";
import clsx from "clsx";

// btnClassName: used to style the button user clicks to open the modal
// btnContent: content within the button e.g. View Applicaiton Text
// children: content within the modal e.g. Application Details
interface Props {
  btnClassName: string;
  btnContent: React.ReactNode;
  closeBtnClassName: string;
  closeBtnContent: React.ReactNode;
  children: React.ReactNode;
  end: boolean;
}

export default function Modal({
  btnClassName,
  btnContent,
  closeBtnClassName,
  closeBtnContent,
  children,
  end,
}: Props) {
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
      <dialog ref={modalRef} className="transition-none modal overflow-auto">
        <div
          className={clsx(
            "modal-box bg-white p-8 flex flex-row justify-between items-start overflow-auto",
            { "flex-wrap": end }
          )}
        >
          {children}

          <div className={clsx("modal-action mt-0", { "self-end, pt-5": end })}>
            <form method="dialog">
              <button className={closeBtnClassName}>{closeBtnContent}</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
