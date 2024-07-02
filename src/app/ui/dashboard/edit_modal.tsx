interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  applicationDashboard: string;
  status: "Closed" | "Pending" | "Interviewed" | "Hired";
}

export default function ModalEdit({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
}: Props) {
  return (
    <div className="flex flex-col gap-2 text-black items-start w-96">
      <h4>{company}</h4>
      <h3 className="text-2xl font-bold">{role}</h3>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Location:</span>
        </div>
        <input
          type="text"
          placeholder={location}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Date Posted:</span>
        </div>
        <input
          type="text"
          placeholder={datePosted}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Date Applied:</span>
        </div>
        <input
          type="text"
          placeholder={dateApplied}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Dashboard:</span>
        </div>
        <input
          type="text"
          placeholder={applicationDashboard}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Status:</span>
        </div>
        <select
          className="select select-bordered bg-white text-base"
          defaultValue={status}
        >
          <option value="Closed">Closed</option>
          <option value="Pending">Pending</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Hired">Hired</option>
        </select>
      </label>
    </div>
  );
}
