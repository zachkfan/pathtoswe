interface Props {
  company: string;
  role: string;
}

export default function ApplyModal({ company, role }: Props) {
  return (
    <div className="form-control flex flex-col flex-wrap items-center">
      <label className="cursor-pointer label">
        <div className="label-text text-black w-full text-lg text-center">
          Add{" "}
          <p className="font-bold inline">
            {company} - {role}
          </p>{" "}
          to Dashboard?
        </div>
      </label>
    </div>
  );
}
