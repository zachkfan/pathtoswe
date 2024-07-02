import SortingCard from "@/app/ui/dashboard/sorting_card";
import {
  XMarkIcon,
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import Table from "@/app/ui/dashboard/table";
import Card from "@/app/ui/dashboard/dashboard_card";
import SortBy from "@/app/ui/sort_by";

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
      <SortBy />
      <div className="flex gap-10 justify-center w-full my-4">
        <SortingCard
          status="Closed"
          icon={XMarkIcon}
          applicationCount={2}
          bgColor="#FFE2E5"
          iconBgColor="#FA5A7D"
        />
        <SortingCard
          status="Pending"
          icon={DocumentTextIcon}
          applicationCount={15}
          bgColor="#FFF4DE"
          iconBgColor="#FF947A"
        />
        <SortingCard
          status="Interviewed"
          icon={UsersIcon}
          applicationCount={7}
          bgColor="#F3E8FF"
          iconBgColor="#BF83FF"
        />
        <SortingCard
          status="Hired"
          icon={TagIcon}
          applicationCount={3}
          bgColor="#DCFCE7"
          iconBgColor="#3CD856"
        />
      </div>
      <Table />
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
