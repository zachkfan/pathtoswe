import Image from "next/image";
import Banner from "./ui/home/banner"
import { nunito } from "./ui/fonts";

export default function Home() {
  return (
    <main className={nunito.className}>
    <Banner/>
    </main>
  );
}
