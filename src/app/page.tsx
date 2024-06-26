import Image from "next/image";
import Banner from "./ui/home/banner"
import HomeBody from "./ui/home/home_body"

export default function Home() {
  return (
    <main className="font-sans">
    <Banner/>
    <HomeBody/>
    </main>
  );
}
