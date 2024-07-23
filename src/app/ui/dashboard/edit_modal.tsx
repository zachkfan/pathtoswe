interface Props {
  company?: string;
  role?: string;
  location?: string;
  datePosted?: string;
  dateApplied?: string;
  applicationDashboard?: string;
  status?: "Closed" | "Pending" | "Interviewed" | "Hired";
  type: "Add" | "Edit";
}

export default function ModalEdit({
  company,
  role,
  location,
  datePosted,
  dateApplied,
  applicationDashboard,
  status,
  type,
}: Props) {
  return (
    <div className="flex flex-col gap-2 text-black items-start w-96">
      {type == "Add" ? (
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black">Company:</span>
          </div>
          <input
            type="text"
            placeholder="Input Company"
            className="input input-bordered w-full max-w-xs bg-white"
          />
        </label>
      ) : (
        <h4>{company}</h4>
      )}
      {type == "Add" ? (
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black">Role:</span>
          </div>
          <input
            type="text"
            placeholder="Input Role"
            className="input input-bordered w-full max-w-xs bg-white"
          />
        </label>
      ) : (
        <h3 className="text-2xl font-bold">{role}</h3>
      )}

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Location:</span>
          <span className="label-text-alt">ex. New York, NY; Boston, MA</span>
        </div>
        <input
          type="text"
          placeholder={type == "Add" ? "Input Location" : location}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Date Posted:</span>
          <span className="label-text-alt">ex. 2024-07-23</span>
        </div>
        <input
          type="text"
          placeholder={type == "Add" ? "Input Date Posted" : datePosted}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Date Applied:</span>
          <span className="label-text-alt">ex. 2024-07-24</span>
        </div>
        <input
          type="text"
          placeholder={type == "Add" ? "Input Date Applied" : dateApplied}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Dashboard:</span>
          <span className="label-text-alt">ex. www.google.com</span>
        </div>
        <input
          type="text"
          placeholder={type == "Add" ? "Input Dashboard" : applicationDashboard}
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-black">Status:</span>
        </div>
        <select
          className="select select-bordered bg-white text-base"
          defaultValue={type == "Add" ? "Input Status" : status}
        >
          {type == "Add" ? (
            <>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </>
          ) : (
            <>
              <option value="Closed">Closed</option>
              <option value="Pending">Pending</option>
            </>
          )}

          <option value="Interviewed">Interviewed</option>
          <option value="Hired">Hired</option>
        </select>
      </label>
    </div>
  );
}
