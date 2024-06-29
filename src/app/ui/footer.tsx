import Image from "next/image";
import Icon from "./home/social_media_icon";

export default function Footer() {
  return (
    <footer className="footer bg-concrete-gray text-black-gray items-center p-4">
      <aside className="grid-flow-col items-center">
        <Image
          src="/big_concrete_gray_logo.png"
          width={36}
          height={36}
          alt="PathToSWE Logo"
          className="w-12 h-12"
        />
        <p>
          Copyright © {new Date().getFullYear()} PathToSWE. All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
        <Icon
          image={"/linkedin.svg"}
          imageAlt={"Linkedin Icon"}
          href={"https://www.linkedin.com/in/kevin-zheng-h7"}
        ></Icon>
        <Icon
          image={"/github.svg"}
          imageAlt={"Github Icon"}
          href={"https://github.com/zachkfan/pathtoswe/tree/master"}
        ></Icon>
      </nav>
    </footer>
  );
}
