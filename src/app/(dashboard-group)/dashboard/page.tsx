import SortingCard from "@/app/ui/dashboard/sorting-card";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Page() {
  return (
    <>
      <p>Dashboard Page</p>
      <SortingCard
        status="Closed"
        icon={XMarkIcon}
        applicationCount={2}
        bgColor="#FFE2E5"
        iconBgColor="#FA5A7D"
      />
    </>
  );
}
