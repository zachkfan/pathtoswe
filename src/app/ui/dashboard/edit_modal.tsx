import toast, { Toaster } from "react-hot-toast";

interface Props {
  company?: string;
  role?: string;
  location?: string;
  datePosted?: string;
  dateApplied?: string;
  applicationDashboard?: string;
  status?: "Closed" | "Pending" | "Interviewed" | "Hired";
  item_id?: number;
  type: "Add" | "Edit";
}

export default function ModalEdit({
  company,
  role,
  dateApplied,
  applicationDashboard,
  status,
  item_id,
  type,
}: Props) {
  async function handleDelete() {
    try {
      const response = await fetch("/api/dashboard", {
        method: "DELETE",
        body: JSON.stringify({ id: item_id }),
      });

      const result = (await response.json()) as { message: string };
      if (response.ok) {
        toast.success("Application Successfully Deleted");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      return "Something went wrong";
    }
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const formCompany = formData.get("company");
      const formRole = formData.get("role");
      const formLocation = formData.get("location");
      const formDatePosted = formData.get("datePosted");
      const formDateApplied = formData.get("dateApplied");
      const formApplicationDashboard = formData.get("applicationDashboard");
      const formStatus = formData.get("status") as
        | "Closed"
        | "Pending"
        | "Interviewed"
        | "Hired";
      const response = await fetch("/api/dashboard", {
        method: "PUT",
        body: JSON.stringify({
          company: formCompany,
          role: formRole,
          location: formLocation,
          datePosted: formDatePosted,
          dateApplied: formDateApplied,
          applicationDashboard: formApplicationDashboard,
          status: formStatus,
          addOrEdit: type,
          internship_id: item_id,
        }),
      });
      const result = (await response.json()) as { message: string };
      if (response.ok) {
        toast.success("Changes Successfully Saved");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something Went wrong");
      return "Something Went Wrong";
    }
  }
  return (
    <>
      {/* TO DO POSITION TOASTER BETTER FOR ADDING APPLICATIOn */}
      <Toaster
        toastOptions={{
          className: "text-black font-semibold",
          duration: 3000,
        }}
        position="bottom-center"
      />
      <form
        className="flex flex-col gap-2 text-black items-start w-full"
        onSubmit={handleSubmit}
      >
        {type == "Add" ? (
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text text-black">Company:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-sm bg-white"
              name="company"
            />
          </label>
        ) : (
          <h4>{company}</h4>
        )}
        {type == "Add" ? (
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text text-black">Role:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-sm bg-white"
              name="role"
            />
          </label>
        ) : (
          <h3 className="text-2xl font-bold">{role}</h3>
        )}

        {type == "Add" && (
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text text-black">Location:</span>
              <span className="label-text-alt">
                ex. New York, NY; Boston, MA
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-sm bg-white"
              name="location"
            />
          </label>
        )}

        {type == "Add" && (
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text text-black">Date Posted:</span>
              <span className="label-text-alt">ex. 2024-07-23</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-sm bg-white"
              name="datePosted"
            />
          </label>
        )}
        <label className="form-control w-full max-w-sm">
          <div className="label">
            <span className="label-text text-black">Date Applied:</span>
            <span className="label-text-alt">ex. 2024-07-24</span>
          </div>
          <input
            type="text"
            placeholder={type == "Add" ? "" : dateApplied}
            className="input input-bordered w-full max-w-sm bg-white"
            name="dateApplied"
          />
        </label>
        <label className="form-control w-full max-w-sm">
          <div className="label">
            <span className="label-text text-black">Dashboard:</span>
            <span className="label-text-alt">ex. www.google.com</span>
          </div>
          <input
            type="text"
            placeholder={type == "Add" ? "" : applicationDashboard}
            className="input input-bordered w-full max-w-sm bg-white"
            name="applicationDashboard"
          />
        </label>
        <label className="form-control w-full max-w-sm">
          <div className="label">
            <span className="label-text text-black">Status:</span>
          </div>
          <select
            className="select select-bordered bg-white text-base"
            defaultValue={type == "Add" ? "" : status}
            name="status"
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
        <div className="flex flex-row gap-4">
          <button
            type="submit"
            className="btn btn-sm bg-black border-none font-bold hover:bg-black/80 h-10 px-4 my-2 w-40 text-white"
          >
            Save
          </button>
          {type == "Edit" && (
            <button
              type="button"
              className="btn btn-sm bg-red-500 border-red font-bold hover:bg-black/80 h-10 px-4 my-2 w-20 text-white"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </>
  );
}
