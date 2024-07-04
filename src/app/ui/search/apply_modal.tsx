interface Props {
  company: string;
  role: string;
}

export default function ApplyModal({ company, role }: Props) {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text text-black w-fit text-lg">
          Add{" "}
          <p className="font-bold inline">
            {company} - {role}
          </p>{" "}
          to Dashboard?
        </span>
        <input type="checkbox" defaultChecked className="checkbox" />
      </label>
    </div>
  );
}
