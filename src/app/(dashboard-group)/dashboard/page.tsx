import SortingCard from "@/app/ui/dashboard/sorting_card";
import {
  XMarkIcon,
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import Row from "@/app/ui/dashboard/dashboard_row";
import Card from "@/app/ui/dashboard/dashboard_card";

export default function Page() {
  return (
    <>
      <p>Dashboard Page</p>
      <div className="flex justify-between w-full">
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
      <table className="table table-pin-cols text-center text-black mt-4">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>Date Posted</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <Row
            company="Google"
            role="Software Engineering Intern"
            location="NYC"
            datePosted="06/30/2024"
            dateApplied="06/31/2024"
            applicationDashboard="https://www.google.com"
            status="Pending"
          ></Row>
          <Row
            company="Meta"
            role="Product Management Intern"
            location="Redmond, Washington"
            datePosted="06/32/2024"
            dateApplied="07/19/2024"
            applicationDashboard="https://www.facebook.com"
            status="Closed"
          ></Row>
          <Row
            company="Nvidia"
            role="Software Engineering Intern"
            location="Taiwan"
            datePosted="06/32/2024"
            dateApplied="07/19/2024"
            applicationDashboard="https://www.nvidia.com"
            status="Interviewed"
          ></Row>
          <Row
            company="Amazon"
            role="Cloud Engineering Intern"
            location="Chicago, IL"
            datePosted="06/32/2024"
            dateApplied="07/19/2024"
            applicationDashboard="https://www.amazon.com"
            status="Hired"
          ></Row>
        </tbody>
      </table>
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
