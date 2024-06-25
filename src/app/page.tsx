import Image from "next/image";
import Banner from "./componenets/banner"
import { Nunito } from "next/font/google";

const nunito = Nunito({subsets: ['latin']})

export default function Home() {
  return (
    <main className={nunito.className}>
    <Banner/>
    </main>
  );
}
