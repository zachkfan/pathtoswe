import Modal from "@/app/ui/modal";
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
  rowHidden: () => void;
}) => {
  return (
    <>
      <a href={href} target="_blank" className=" hidden lg:block">
        <Modal
          btnClassName="bg-black-gray text-white rounded-md text-sm font-sans px-7 py-1 hover:bg-black-gray/80"
          btnContent={"Apply"}
        >
          <ApplyModal company={company} role={role} />
        </Modal>
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
              <Modal btnClassName={""} btnContent={"Apply"}>
                <ApplyModal company={company} role={role} />
              </Modal>
            </a>
          </li>
          <li>
            <a onClick={() => setTimeout(rowHidden, 125)}>Save</a>
          </li>
          <li>
            <a onClick={() => setTimeout(rowHidden, 125)}>Hide</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ApplyButton;
