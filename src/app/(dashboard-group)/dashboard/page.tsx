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
      <div className="mt-4">
        <Card
          company="Google"
          role="Software Engineering Intern"
          location="NYC"
          datePosted="06/30/2024"
          dateApplied="06/31/2024"
          applicationDashboard="https://www.google.com"
          status="Pending"
        />
      </div>
    </>
  );
}
