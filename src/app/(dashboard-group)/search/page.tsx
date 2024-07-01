import React from "react";
import Table from "@/app/ui/search/table";

export default function Page() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-black-gray mx-auto text-5xl font-bold w-full">
        Search List
      </h1>
      <h3 className="text-black-gray mx-auto text-xl font-semibold w-full py-6">
        Streamline Your Internship Search and Manage Applications Seamlessly!
      </h3>
      <Table />
    </div>
  );
}
