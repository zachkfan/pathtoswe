"use client";

import toast, { Toaster } from "react-hot-toast";
import { mutate } from "swr";
import { z } from "zod";
import React, { useState } from "react";

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
  const [selectedStatus, setSelectedStatus] = useState(status);
  const dateSchema = z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format");
  const urlSchema = z
    .string()
    .regex(/^https?:\/\/.*/, "URL must start with http:// or https://");

  async function handleDelete() {
    try {
      const response = await fetch("/api/dashboard", {
        method: "DELETE",
        body: JSON.stringify({ id: item_id }),
      });

      const result = (await response.json()) as { message: string };
      if (response.ok) {
        toast.success("Application Successfully Deleted");
        await Promise.all([
          // refetches data for the two status pages
          mutate({ url: "/api/dashboard", tab: "All" }),
          mutate({ url: "/api/dashboard", tab: status }),
          // refetches data for the application counts
          mutate("/api/dashboard"),
        ]);
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
    const form = event.currentTarget;
    try {
      const formData = new FormData(form);
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
      // Validate the dates
      if (formDatePosted) {
        dateSchema.parse(formDatePosted);
      }
      if (formDateApplied) {
        dateSchema.parse(formDateApplied);
      }
      // Validate the URL
      if (formApplicationDashboard) {
        urlSchema.parse(formApplicationDashboard);
      }
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
        form.reset();
        await Promise.all([
          // refetches data for the application counts
          mutate("/api/dashboard"),
          // refetches data for the two status pages
          mutate({ url: "/api/dashboard", tab: "All" }),
          mutate({ url: "/api/dashboard", tab: status }),
        ]);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle Zod validation error
        toast.error(error.errors[0].message);
      } else {
        toast.error("Something Went wrong");
      }
      return "Something Went Wrong";
    }
  }
  return (
    <div className="flex flex-col">
      {/* TO DO POSITION TOASTER BETTER FOR ADDING APPLICATIOn */}
      <Toaster
        gutter={16}
        containerStyle={{ position: "sticky", top: 18 }}
        toastOptions={{
          className: "text-black font-semibold",
          duration: 3000,
        }}
        position="bottom-right"
      />
      <form
        className="flex flex-col gap-2 text-black items-start w-96 text-start"
        onSubmit={handleSubmit}
      >
        {type == "Add" ? (
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text text-black">Company:</span>
              <span className="label-text-alt">ex. Google</span>
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
              <span className="label-text-alt">
                ex. Software Engineer Intern
              </span>
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
              <span className="label-text-alt">
                ex. {new Date().toISOString().substring(0, 10)}
              </span>
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
            <span className="label-text-alt">
              ex. {new Date().toISOString().substring(0, 10)}
            </span>
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
            <span className="label-text-alt">ex. https://www.google.com/</span>
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
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value as typeof status);
            }}
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
    </div>
  );
}
