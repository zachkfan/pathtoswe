import SearchBarTable from "@/app/ui/dashboard/search_bar_and_table";
import Card from "@/app/ui/dashboard/dashboard_card";

export default function Page() {
  return (
    <>
      <div className="flex flex-col text-center">
        <h1 className="text-black-gray mx-auto text-5xl font-bold w-full">
          Dashboard
        </h1>
        <h3 className="text-black-gray mx-auto text-xl font-semibold w-full py-6">
          Convenient Tracking of Your Applications All in One Place!
        </h3>
      </div>
      <SearchBarTable />
    </>
  );
}
