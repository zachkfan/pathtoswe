import SortingCard from "@/app/ui/dashboard/sorting-card";
import {
  XMarkIcon,
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

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
    </>
  );
}
