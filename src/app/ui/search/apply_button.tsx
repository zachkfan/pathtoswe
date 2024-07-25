import ButtonModal from "@/app/ui/btn_modal";
import ApplyModal from "@/app/ui/search/apply_modal";

const ApplyButton = ({
  href,
  company,
  role,
  rowHidden,
}: {
  href: string;
  company: string;
  role: string;
  rowHidden: (item_status: "Pending" | "Hidden" | "Saved") => void;
}) => {
  return (
    <>
      <a href={href} target="_blank" className=" hidden lg:block">
        <ButtonModal
          btnClassName="bg-black-gray text-white rounded-md text-sm font-sans px-7 py-1 hover:bg-black-gray/80"
          btnContent={"Apply"}
          closeBtnClassName="btn mx-auto w-[28rem] item-center font-black text-lg"
          closeBtnContent="Yes"
          onCloseBtnClick={rowHidden}
          end={true}
        >
          <ApplyModal company={company} role={role} />
        </ButtonModal>
      </a>
      <div className="dropdown block lg:hidden bg-black-gray text-white rounded-md text-sm w-32 px-7 py-1">
        <div tabIndex={0} role="button" className="bg-black-gray text-white">
          See More
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box z-[1] w-32 p-2 shadow text-white bg-black-gray"
        >
          <li>
            <a href={href} target="_blank">
              <ButtonModal
                btnClassName={""}
                btnContent={"Apply"}
                closeBtnClassName="btn mx-auto w-[28rem] item-center font-black text-lg"
                closeBtnContent="Yes"
                end={true}
              >
                <ApplyModal company={company} role={role} />
              </ButtonModal>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                rowHidden("Saved");
              }}
            >
              Save
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                rowHidden("Hidden");
              }}
            >
              Hide
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ApplyButton;
