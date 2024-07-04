import ButtonModal from "../btn_modal";
import ModalEdit from "./edit_modal";

export default function AddApplicationButton() {
  return (
    <ButtonModal
      btnClassName="rounded-lg relative w-10 xl:w-52 h-10 cursor-pointer flex items-center border border-white bg-black-gray group hover:bg-black-gray active:bg-black-gray active:border-green-500"
      closeBtnClassName="btn btn-sm bg-black border-none text-black font-bold hover:bg-black/80 h-10 px-4 w-40 text-white"
      closeBtnContent={"Add Application"}
      end={true}
      btnContent={
        <>
          <span className="text-white font-semibold ml-8 transform group-hover:translate-x-32 transition-all duration-300 xl:flex hidden">
            Add Application
          </span>
          <span className="absolute right-0 h-full w-10 rounded-lg bg-black-gray flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <svg
              className="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </>
      }
    >
      <ModalEdit type={"Add"} />
    </ButtonModal>
  );
}
