import SortingCard from "@/app/ui/dashboard/sorting-card";
import {
  XMarkIcon,
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import Row from "@/app/ui/dashboard/dashboard_row";

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
      <table className="table table-pin-cols table-zebra text-center">
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
            role="SWE Intern"
            location="NYC"
            date_posted="06/30/2024"
            date_applied="06/31/2024"
            status="Pending"
          ></Row>
          <Row
            company="Meta"
            role="SWE Intern"
            location="Redmond, Washington"
            date_posted="06/32/2024"
            date_applied="07/19/2024"
            status="Closed"
          ></Row>
          <Row
            company="Nvidia"
            role="SWE Intern"
            location="Taiwan"
            date_posted="06/32/2024"
            date_applied="07/19/2024"
            status="Interviewed"
          ></Row>
          <Row
            company="Amazon"
            role="Cloud Engineern Intern"
            location="Chicago, IL"
            date_posted="06/32/2024"
            date_applied="07/19/2024"
            status="Hired"
          ></Row>
        </tbody>
      </table>
    </>
  );
}
