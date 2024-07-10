import { HomeIcon, ListBulletIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Search",
    href: "/search",
    icon: ListBulletIcon,
  },
  { name: "Account", href: "/account", icon: UserIcon },
];

interface Props {
  open: boolean;
}

export default function NavLinks({ open }: Props) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300 flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-concrete-gray hover:text-black-gray md:flex-none md:p-2 md:px-3",
              {
                "bg-concrete-gray text-black": pathname === link.href,
                "md:justify-start": open,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p
              className={clsx(
                "animate-fadeInFromRight",
                open ? "md:block" : "hidden"
              )}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
